import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { JOB_ID } from "../helpers/constants";
import { InflationBased } from "../typechain-types";

describe("InflationBased contract", () => {
  let snap: string;
  let ib: InflationBased;
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

      const jobId = JOB_ID; //Chainlink Job_Id - adjust with the correct value
      const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address deployed on Hardhat
      const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; //USDC smart contract address
      const lt = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address

      const ibFactory = await ethers.getContractFactory("InflationBased", owner);

      ib = (await ibFactory.deploy(
        ethers.utils.parseEther((0.1).toFixed(18)),
        jobId,
        oracleId,
        lt,
        registrar,
        60,
        baseCurrency,
      )) as InflationBased;
      await ib.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(ib).to.not.be.undefined;

      expect(await ib.owner()).to.equal(owner.address);
      expect(await ib.jobId()).to.equal("d220e5e687884462909a03021385b7ae");
      expect(await ib.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await ib.interval()).to.equal(60);
      expect(await ib.baseCurrency()).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
    });
  });

  describe("Subscription function", function () {
    it("Should set the correct values in the subscription", async () => {
      const subscriptionType = 1;
      const amount = 100;
      const action = 1;
      const token1 = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // USDT in hardhat
      const token2 = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK in hardhat
      const liquidityPool = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // example liquidity pool address
      const feedChangePercent = 10;

      const subScriptionId = await ib.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        feedChangePercent,
      );

      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });

    it("should request the inflation rate", async () => {
      const requestId = await ib.requestInflationRate();
      expect(requestId).to.not.equal(0);
    });
  });
});
