import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { FEE, JOB_ID } from "../helpers/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TimeBase } from "../typechain-types";

describe("TimeBased Contract ", function () {
  let snap: string;
  let owner: SignerWithAddress;
  let tb: TimeBase;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });
  afterEach(async () => {
    await evmRevert(snap);
  });

  describe("constructor", function () {
    beforeEach(async () => {
      const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The oracle price address
      const fee = FEE; //Vary depending to the network
      const jobId = JOB_ID; //adjust with the correct value
      const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
      const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; ////The address of the Chainlink Automation registry contract
      const baseToken = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

      const accounts = await ethers.getSigners();
      owner = accounts[0];

      const tbFactory = await ethers.getContractFactory("TimeBase", owner);

      tb = (await tbFactory.deploy(
        oracleAddress,
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        60,
        baseToken,
      )) as TimeBase;
      await tb.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(tb).to.not.be.undefined;

      expect(await tb.owner()).to.equal(owner.address);
      expect(await tb.jobId()).to.equal("d220e5e687884462909a03021385b7ae");
      expect(await tb.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await tb.interval()).to.equal(60);
      expect(await tb.baseToken()).to.equal("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
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

      const subScriptionId = await tb.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        60,
        10,
      );

      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });
  });
});
