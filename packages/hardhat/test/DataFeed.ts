import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { DataFeedBased } from "../typechain-types";

describe("DataFeedBased Contract ", () => {
  let snap: string;
  let df: DataFeedBased;
  let owner: SignerWithAddress;

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

      const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The oracle price address
      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2";
      const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address deployed on Hardhat

      const dfFactory = await ethers.getContractFactory("DataFeedBased", owner);

      df = (await dfFactory.deploy(oracleAddress, registrar, 60, baseCurrency)) as DataFeedBased;

      await df.deployTransaction.wait();
      await df.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(df).to.not.be.undefined;
      expect(await df.owner()).to.equal(owner.address);
      expect(await df.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await df.interval()).to.equal(60);
      expect(await df.baseCurrency()).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
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
      const feedChangePercent = 10;
      const feedId = ethers.utils.formatBytes32String("feedId");

      const subScriptionId = await df.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        feedChangePercent,
        feedId,
      );

      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });
  });
});
