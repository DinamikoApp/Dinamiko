import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import * as h from "../helpers/utilities/helpers";
import { assert, expect } from "chai";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ERC20BalanceMonitor, LinkToken } from "../typechain-types";

describe("ERC20BalanceMonitor", () => {
  let snap: string;
  let bm: ERC20BalanceMonitor;
  let lt: LinkToken;
  let owner: SignerWithAddress;
  let stranger: SignerWithAddress;
  let keeperRegistry: SignerWithAddress;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });
  afterEach(async () => {
    await evmRevert(snap);
  });

  const OWNABLE_ERR = "Only callable by owner";
  const PAUSED_ERR = "Pausable: paused";

  const zeroLINK = ethers.utils.parseEther("0");
  const oneLINK = ethers.utils.parseEther("1");
  const twoLINK = ethers.utils.parseEther("2");
  const fiveLINK = ethers.utils.parseEther("5");
  const tenLINK = ethers.utils.parseEther("10");

  const oneHundredLINK = ethers.utils.parseEther("100");

  const watchAddress1 = ethers.Wallet.createRandom().address;
  const watchAddress2 = ethers.Wallet.createRandom().address;
  const watchAddress3 = ethers.Wallet.createRandom().address;
  const watchAddress4 = ethers.Wallet.createRandom().address;
  let watchAddress5: string;
  let watchAddress6: string;

  async function assertWatchlistBalances(
    balance1: BigNumber,
    balance2: BigNumber,
    balance3: BigNumber,
    balance4: BigNumber,
    balance5: BigNumber,
    balance6: BigNumber,
  ) {
    await h.assertLinkTokenBalance(lt, watchAddress1, balance1, "address 1");
    await h.assertLinkTokenBalance(lt, watchAddress2, balance2, "address 2");
    await h.assertLinkTokenBalance(lt, watchAddress3, balance3, "address 3");
    await h.assertLinkTokenBalance(lt, watchAddress4, balance4, "address 4");
    await h.assertLinkTokenBalance(lt, watchAddress5, balance5, "address 5");
    await h.assertLinkTokenBalance(lt, watchAddress6, balance6, "address 6");
  }

  describe("constructor", function () {
    beforeEach(async () => {
      const accounts = await ethers.getSigners();
      owner = accounts[0];
      stranger = accounts[1];
      keeperRegistry = accounts[2];
      watchAddress5 = accounts[3].address;
      watchAddress6 = accounts[4].address;

      const bmFactory = await ethers.getContractFactory("ERC20BalanceMonitor", owner);
      const ltFactory = await ethers.getContractFactory("LinkToken", owner);

      lt = (await ltFactory.deploy()) as LinkToken;
      bm = (await bmFactory.deploy(lt.address, keeperRegistry.address, 0)) as ERC20BalanceMonitor;

      for (let i = 1; i <= 4; i++) {
        const recipient = await accounts[i].getAddress();
        await lt.connect(owner).transfer(recipient, oneHundredLINK);
      }
    });

    afterEach(async () => {
      await h.reset();
    });

    describe("add funds", () => {
      it("Should allow anyone to add funds", async () => {
        await lt.transfer(bm.address, oneLINK);
        await lt.connect(stranger).transfer(bm.address, oneLINK);
      });
    });

    describe("withdraw()", () => {
      beforeEach(async () => {
        const tx = await lt.connect(owner).transfer(bm.address, oneLINK);
        await tx.wait();
      });

      it("Should allow the owner to withdraw", async () => {
        const beforeBalance = await lt.balanceOf(owner.address);
        const tx = await bm.connect(owner).withdraw(oneLINK, owner.address);
        await tx.wait();
        const afterBalance = await lt.balanceOf(owner.address);
        assert.isTrue(afterBalance.gt(beforeBalance), "balance did not increase after withdraw");
      });

      it("Should not allow strangers to withdraw", async () => {
        const tx = bm.connect(stranger).withdraw(oneLINK, owner.address);
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

      it("Should emit an event", async () => {
        const setTx = await bm.connect(owner).setKeeperRegistryAddress(newAddress);
        await expect(setTx).to.emit(bm, "KeeperRegistryAddressUpdated").withArgs(keeperRegistry.address, newAddress);
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
          new Array(5).fill(oneLINK),
          new Array(5).fill(twoLINK),
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
          const fundTx = await lt.connect(owner).transfer(
            bm.address,
            fiveLINK, // only enough LINK to fund 2 addresses
          );
          await fundTx.wait();
          await assertWatchlistBalances(zeroLINK, zeroLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
          const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload);
          await assertWatchlistBalances(twoLINK, twoLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
          await expect(performTx).to.emit(bm, "TopUpSucceeded").withArgs(watchAddress1);
          await expect(performTx).to.emit(bm, "TopUpSucceeded").withArgs(watchAddress2);
        });
      });

      context("when fully funded", () => {
        beforeEach(async () => {
          const fundTx = await lt.connect(owner).transfer(bm.address, tenLINK);
          await fundTx.wait();
        });

        it("Should fund the appropriate addresses", async () => {
          await assertWatchlistBalances(zeroLINK, zeroLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
          const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload, { gasLimit: 2_500_000 });
          await performTx.wait();
          await assertWatchlistBalances(twoLINK, twoLINK, twoLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
        });

        it("Should only fund active, underfunded addresses", async () => {
          await assertWatchlistBalances(zeroLINK, zeroLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
          const performTx = await bm.connect(keeperRegistry).performUpkeep(invalidPayload, { gasLimit: 2_500_000 });
          await performTx.wait();
          await assertWatchlistBalances(twoLINK, twoLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
        });

        it("Should protect against running out of gas", async () => {
          await assertWatchlistBalances(zeroLINK, zeroLINK, zeroLINK, zeroLINK, oneHundredLINK, oneHundredLINK);
          const performTx = await bm.connect(keeperRegistry).performUpkeep(validPayload, { gasLimit: 130_000 }); // too little for all 3 transfers
          await performTx.wait();
          const balance1 = await lt.balanceOf(watchAddress1);
          const balance2 = await lt.balanceOf(watchAddress2);
          const balance3 = await lt.balanceOf(watchAddress3);
          const balances = [balance1, balance2, balance3].map(n => n.toString());
          expect(balances)
            .to.include(twoLINK.toString()) // expect at least 1 transfer
            .to.include(zeroLINK.toString()); // expect at least 1 out of funds
        });
      });
    });
  });
});
