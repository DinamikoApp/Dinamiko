import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

describe("DataFeedBased Contract ", function () {
  let snap: string;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });

  afterEach(async () => {
    await evmRevert(snap);
  });

  // Set up test data
  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //Chainlink Job_Id - adjust with the correct value
  const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const registrar = REGISTRAR; //The address of the Chainlink Automation registry contract - adjust with the correct value
  const updateInterval = UPDATEINTERVAL;
  const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address

  describe("constructor", function () {
    it("Should set the correct values in the constructor", async () => {
      const instance = await ethers.getContractFactory("InflationBased");
      const oracle = await instance.deploy(
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        updateInterval,
        baseCurrency,
      );

      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      expect(await oracle.jobId()).to.equal("d220e5e687884462909a03021385b7ae");
      expect(await oracle.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await oracle.interval()).to.equal(60);
      expect(await oracle.baseCurrency()).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
    });

    it("should return a valid requestId", async () => {
      const instance = await ethers.getContractFactory("InflationBased");
      const oracle = await instance.deploy(
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        updateInterval,
        baseCurrency,
      );

      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      const tx = await oracle.requestInflationRate();
      const receipt = await tx.wait();
      const requestId = receipt.events[1].topics[1];

      expect(requestId).to.be.a("string");
      expect(requestId).to.have.lengthOf(66);
    });

    it("should update the LastInflationsRate variable", async () => {
      const instance = await ethers.getContractFactory("InflationBased");
      const oracle = await instance.deploy(
        ethers.utils.parseEther(fee.toFixed(18)),
        jobId,
        oracleId,
        link,
        registrar,
        updateInterval,
        baseCurrency,
      );

      await oracle.deployed();

      expect(oracle).to.not.be.undefined;
      const tx = await oracle.requestInflationRate();
      await tx.wait();

      // Wait for the request to be fulfilled
      await new Promise(resolve => setTimeout(resolve, 10000));

      const inflationRate = await oracle.LastInflationsRate();

      expect(inflationRate).to.not.equal(0);
    });
  });
});
