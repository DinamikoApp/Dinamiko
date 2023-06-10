import { ethers } from "hardhat";
import { assert, expect } from "chai";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import * as h from "../helpers/utilities/helpers";
import { EthBalanceMonitor } from "../typechain-types";

const OWNABLE_ERR = "Only callable by owner";
const PAUSED_ERR = "Pausable: paused";

const zeroEth = ethers.utils.parseEther("0");
const oneEth = ethers.utils.parseEther("1");
const twoEth = ethers.utils.parseEther("2");
const fiveEth = ethers.utils.parseEther("5");
const sixEth = ethers.utils.parseEther("6");
const tenEth = ethers.utils.parseEther("10");

const watchAddress1 = ethers.Wallet.createRandom().address;
const watchAddress2 = ethers.Wallet.createRandom().address;
const watchAddress3 = ethers.Wallet.createRandom().address;
const watchAddress4 = ethers.Wallet.createRandom().address;
let watchAddress5: string;
let watchAddress6: string;

async function assertWatchlistBalances(
  balance1: number,
  balance2: number,
  balance3: number,
  balance4: number,
  balance5: number,
  balance6: number,
) {
  const toEth = (n: number) => ethers.utils.parseUnits(n.toString(), "ether");
  await h.assertBalance(watchAddress1, toEth(balance1), "address 1");
  await h.assertBalance(watchAddress2, toEth(balance2), "address 2");
  await h.assertBalance(watchAddress3, toEth(balance3), "address 3");
  await h.assertBalance(watchAddress4, toEth(balance4), "address 4");
  await h.assertBalance(watchAddress5, toEth(balance5), "address 5");
  await h.assertBalance(watchAddress6, toEth(balance6), "address 6");
}

let bm: EthBalanceMonitor;
let owner: SignerWithAddress;
let stranger: SignerWithAddress;
let keeperRegistry: SignerWithAddress;

describe("EthBalanceMonitor", () => {
  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    owner = accounts[0];
    stranger = accounts[1];
    keeperRegistry = accounts[2];
    watchAddress5 = accounts[3].address;
    watchAddress6 = accounts[4].address;

    const bmFactory = await ethers.getContractFactory("EthBalanceMonitor", owner);

    bm = await bmFactory.deploy(keeperRegistry.address, 0);
  });

  afterEach(async () => {
    await h.reset();
  });

  describe("receive()", () => {
    it("Should allow anyone to add funds", async () => {
      await owner.sendTransaction({
        to: bm.address,
        value: oneEth,
      });
      await stranger.sendTransaction({
        to: bm.address,
        value: oneEth,
      });
    });
  });

  describe("withdraw()", () => {
    beforeEach(async () => {
      const tx = await owner.sendTransaction({
        to: bm.address,
        value: oneEth,
      });
      await tx.wait();
    });

    it("Should allow the owner to withdraw", async () => {
      const beforeBalance = await owner.getBalance();
      const tx = await bm.connect(owner).withdraw(oneEth, owner.address);
      await tx.wait();
      const afterBalance = await owner.getBalance();
      assert.isTrue(afterBalance.gt(beforeBalance), "balance did not increase after withdraw");
    });

    it("Should allow the owner to withdraw to anyone", async () => {
      const beforeBalance = await stranger.getBalance();
      const tx = await bm.connect(owner).withdraw(oneEth, stranger.address);
      await tx.wait();
      const afterBalance = await stranger.getBalance();
      assert.isTrue(beforeBalance.add(oneEth).eq(afterBalance), "balance did not increase after withdraw");
    });

    it("Should not allow strangers to withdraw", async () => {
      const tx = bm.connect(stranger).withdraw(oneEth, owner.address);
      await expect(tx).to.be.revertedWith(OWNABLE_ERR);
    });
  });

  describe("pause() / unpause()", () => {
    it("Should allow owner to pause / unpause", async () => {
      const pauseTx = await bm.connect(owner).pause();
      await pauseTx.wait();
      const unpauseTx = await bm.connect(owner).unpause();
      await unpauseTx.wait();
    });

    it("Should not allow strangers to pause / unpause", async () => {
      const pauseTxStranger = bm.connect(stranger).pause();
      await expect(pauseTxStranger).to.be.revertedWith(OWNABLE_ERR);
      const pauseTxOwner = await bm.connect(owner).pause();
      await pauseTxOwner.wait();
      const unpauseTxStranger = bm.connect(stranger).unpause();
      await expect(unpauseTxStranger).to.be.revertedWith(OWNABLE_ERR);
    });
  });

  describe("getKeeperRegistryAddress() / setKeeperRegistryAddress()", () => {
    const newAddress = ethers.Wallet.createRandom().address;

    it("Should initialize with the registry address provided to the constructor", async () => {
      const address = await bm.getKeeperRegistryAddress();
      assert.equal(address, keeperRegistry.address);
    });

    it("Should allow the owner to set the registry address", async () => {
      const setTx = await bm.connect(owner).setKeeperRegistryAddress(newAddress);
      await setTx.wait();
      const address = await bm.getKeeperRegistryAddress();
      assert.equal(address, newAddress);
    });

    it("Should not allow strangers to set the registry address", async () => {
      const setTx = bm.connect(stranger).setKeeperRegistryAddress(newAddress);
      await expect(setTx).to.be.revertedWith(OWNABLE_ERR);
    });
  });

  describe("getMinWaitPeriodSeconds / setMinWaitPeriodSeconds()", () => {
    const newWaitPeriod = BigNumber.from(1);

    it("Should initialize with the wait period provided to the constructor", async () => {
      const minWaitPeriod = await bm.getMinWaitPeriodSeconds();
      expect(minWaitPeriod).to.equal(0);
    });

    it("Should allow owner to set the wait period", async () => {
      const setTx = await bm.connect(owner).setMinWaitPeriodSeconds(newWaitPeriod);
      await setTx.wait();
      const minWaitPeriod = await bm.getMinWaitPeriodSeconds();
      expect(minWaitPeriod).to.equal(newWaitPeriod);
    });

    it("Should not allow strangers to set the wait period", async () => {
      const setTx = bm.connect(stranger).setMinWaitPeriodSeconds(newWaitPeriod);
      await expect(setTx).to.be.revertedWith(OWNABLE_ERR);
    });
  });

  describe("checkUpkeep() / getUnderfundedAddresses()", () => {
    beforeEach(async () => {
      const setTx = await bm.connect(owner).setWatchList(
        [
          watchAddress1, // needs funds
          watchAddress5, // funded
          watchAddress2, // needs funds
          watchAddress6, // funded
          watchAddress3, // needs funds
        ],
        new Array(5).fill(oneEth),
        new Array(5).fill(twoEth),
      );
      await setTx.wait();
    });

    it("Should return list of address that are underfunded", async () => {
      const fundTx = await owner.sendTransaction({
        to: bm.address,
        value: sixEth, // needs 6 total
      });
      await fundTx.wait();
      const [should, payload] = await bm.checkUpkeep("0x");
      assert.isTrue(should);
      let [addresses] = ethers.utils.defaultAbiCoder.decode(["address[]"], payload);
      assert.deepEqual(addresses, [watchAddress1, watchAddress2, watchAddress3]);
      // checkUpkeep payload should match getUnderfundedAddresses()
      addresses = await bm.getUnderfundedAddresses();
      assert.deepEqual(addresses, [watchAddress1, watchAddress2, watchAddress3]);
    });
  });

  describe("performUpkeep()", () => {
    let validPayload: string;
    let invalidPayload: string;

    beforeEach(async () => {
      validPayload = ethers.utils.defaultAbiCoder.encode(
        ["address[]"],
        [[watchAddress1, watchAddress2, watchAddress3]],
      );
      invalidPayload = ethers.utils.defaultAbiCoder.encode(
        ["address[]"],
        [[watchAddress1, watchAddress2, watchAddress4, watchAddress5]],
      );
      const setTx = await bm.connect(owner).setWatchList(
        [
          watchAddress1, // needs funds
          watchAddress5, // funded
          watchAddress2, // needs funds
          watchAddress6, // funded
          watchAddress3, // needs funds
          // watchAddress4 - omitted
        ],
        new Array(5).fill(oneEth),
        new Array(5).fill(twoEth),
      );
      await setTx.wait();
    });

    it("Should revert when paused", async () => {
      const pauseTx = await bm.connect(owner).pause();
      await pauseTx.wait();
      const performTx = bm.connect(keeperRegistry).performUpkeep(validPayload);
      await expect(performTx).to.be.revertedWith(PAUSED_ERR);
    });

    context("when partially funded", () => {
      it("Should fund as many addresses as possible", async () => {
        const fundTx = await owner.sendTransaction({
          to: bm.address,
          value: fiveEth, // only enough eth to fund 2 addresses
        });
        await fundTx.wait();
        await assertWatchlistBalances(0, 0, 0, 0, 10_000, 10_000);
        const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload);
        await assertWatchlistBalances(2, 2, 0, 0, 10_000, 10_000);
        await expect(performTx).to.emit(bm, "TopUpSucceeded").withArgs(watchAddress1);
        await expect(performTx).to.emit(bm, "TopUpSucceeded").withArgs(watchAddress2);
      });
    });

    context("when fully funded", () => {
      beforeEach(async () => {
        const fundTx = await owner.sendTransaction({
          to: bm.address,
          value: tenEth,
        });
        await fundTx.wait();
      });

      it("Should fund the appropriate addresses", async () => {
        await assertWatchlistBalances(0, 0, 0, 0, 10_000, 10_000);
        const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload, { gasLimit: 2_500_000 });
        await performTx.wait();
        await assertWatchlistBalances(2, 2, 2, 0, 10_000, 10_000);
      });

      it("Should only fund active, underfunded addresses", async () => {
        await assertWatchlistBalances(0, 0, 0, 0, 10_000, 10_000);
        const performTx = await bm.connect(keeperRegistry).performUpkeep(invalidPayload, { gasLimit: 2_500_000 });
        await performTx.wait();
        await assertWatchlistBalances(2, 2, 0, 0, 10_000, 10_000);
      });

      it("Should protect against running out of gas", async () => {
        await assertWatchlistBalances(0, 0, 0, 0, 10_000, 10_000);
        const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload, { gasLimit: 130_000 }); // too little for all 3 transfers
        await performTx.wait();
        const balance1 = await ethers.provider.getBalance(watchAddress1);
        const balance2 = await ethers.provider.getBalance(watchAddress2);
        const balance3 = await ethers.provider.getBalance(watchAddress3);
        const balances = [balance1, balance2, balance3].map(n => n.toString());
        expect(balances)
          .to.include(twoEth.toString()) // expect at least 1 transfer
          .to.include(zeroEth.toString()); // expect at least 1 out of funds
      });
    });
  });

  describe("topUp()", () => {
    context("when not paused", () => {
      it("Should be callable by anyone", async () => {
        const users = [owner, keeperRegistry, stranger];
        for (let idx = 0; idx < users.length; idx++) {
          const user = users[idx];
          await bm.connect(user).topUp([]);
        }
      });
    });
    context("when paused", () => {
      it("Should be callable by no one", async () => {
        await bm.connect(owner).pause();
        const users = [owner, keeperRegistry, stranger];
        for (let idx = 0; idx < users.length; idx++) {
          const user = users[idx];
          const tx = bm.connect(user).topUp([]);
          await expect(tx).to.be.revertedWith(PAUSED_ERR);
        }
      });
    });
  });
});
