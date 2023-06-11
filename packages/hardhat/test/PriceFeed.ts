import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { FEE, JOB_ID } from "../helpers/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { PriceFeedBased } from "../typechain-types";

describe("PriceFeedBased Contract ", function () {
  let snap: string;
  let pf: PriceFeedBased;
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
      const fee = FEE; //Vary depending to the network
      const jobId = JOB_ID; //adjust with the correct value
      const oracleId = "0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD"; //The DinamikoPriceOracle deployment address
      const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2";
      const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address deployed on Hardhat

      const pfFactory = await ethers.getContractFactory("PriceFeedBased", owner);

      pf = (await pfFactory.deploy(
        oracleAddress,
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        60,
        baseCurrency,
      )) as PriceFeedBased;

      await pf.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(pf).to.not.be.undefined;

      expect(await pf.owner()).to.equal(owner.address);
      expect(await pf.jobId()).to.equal("d220e5e687884462909a03021385b7ae");
      expect(await pf.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await pf.interval()).to.equal(60);
      expect(await pf.baseCurrency()).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
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

      const subScriptionId = await pf.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        1000, //Current price
      );

      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });
  });
});
