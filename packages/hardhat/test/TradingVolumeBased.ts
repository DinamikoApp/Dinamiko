import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TradingVolumeBased } from "../typechain-types";

describe("TradingVolumeBased Contract ", function () {
  let snap: string;
  let owner: SignerWithAddress;
  let tv: TradingVolumeBased;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });
  afterEach(async () => {
    await evmRevert(snap);
  });

  describe("constructor", function () {
    beforeEach(async () => {
      const accounts = await ethers.getSigners();
      owner = accounts[0];

      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; ////The address of the Chainlink Automation registry contract
      const baseToken = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

      const tvFactory = await ethers.getContractFactory("TradingVolumeBased", owner);
      tv = (await tvFactory.deploy(registrar, 60, baseToken)) as TradingVolumeBased;

      await tv.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(tv).to.not.be.undefined;
      expect(await tv.owner()).to.equal(owner.address);
      expect(await tv.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await tv.interval()).to.equal(60);
      expect(await tv.baseToken()).to.equal("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
    });
  });

  describe("createSubscription _function", function () {
    it("should create a subscription", async function () {
      const subscriptionType = 1;
      const amount = 100;
      const action = 1;
      const token1 = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // USDT in hardhat
      const token2 = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK in hardhat
      const liquidityPool = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // example liquidity pool address
      const accounts = await ethers.getSigners();
      const volumeOracle = accounts[1];

      const subScriptionId = await tv.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        volumeOracle.address,
        10,
      );

      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });
  });
});
