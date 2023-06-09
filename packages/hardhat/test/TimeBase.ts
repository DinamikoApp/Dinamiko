import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

describe("TimeBased Contract ", function () {
  let snap: string;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });

  afterEach(async () => {
    await evmRevert(snap);
  });

  // Set up test data
  const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The oracle price address
  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //adjust with the correct value
  const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const registrar = REGISTRAR; ////The address of the Chainlink Automation registry contract
  const updateInterval = UPDATEINTERVAL;
  const baseToken = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

  describe("constructor", function () {
    it("Should set the correct values in the constructor", async () => {
      const instance = await ethers.getContractFactory("TimeBase");
      const oracle = await instance.deploy(
        oracleAddress,
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        updateInterval,
        baseToken,
      );

      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      expect(await oracle.jobId()).to.equal("d220e5e687884462909a03021385b7ae");
      expect(await oracle.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await oracle.interval()).to.equal(60);
      expect(await oracle.baseToken()).to.equal("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
    });
  });

  describe("Create subscription", function () {
    it("should create the subscription", async function () {
      const instance = await ethers.getContractFactory("TimeBase");
      const oracle = await instance.deploy(
        oracleAddress,
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        updateInterval,
        baseToken,
      );
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      const subscriptionId = await oracle.createSubscription(
        1, //subscriptionType
        100, //amount
        1, //action
        "0x0165878A594ca255338adfa4d48449f69242Eb8F", //SUSHI ADDRESS ON HARDHAT - token1
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", //USDC ADDRESS ON HARDHAT - token2
        "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", //LIQUIDITY POOL ON HARDHAT - liquidityPool
        60, //interval
        10, //assetPricePercent
      );
      const subscription = await oracle.createSubscription(subscriptionId);
      expect(subscription.subscriptionType).to.equal(1);
      expect(subscription.amount).to.equal(100);
      expect(subscription.action).to.equal(1);
      expect(subscription.token1).to.equal("0x0165878A594ca255338adfa4d48449f69242Eb8F");
      expect(subscription.token2).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
      expect(subscription.liquidityPool).to.equal("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
      expect(subscription.interval).to.equal(60);
      expect(subscription.assetPricePercent).to.equal(10);
    });
  });
});
