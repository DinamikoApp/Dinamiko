import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { InflationBased } from "../typechain-types";
import { expect } from "chai";

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

      const inflationOracle = "0x851356ae760d987E095750cCeb3bC6014560891C";
      const registrar = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; //USDC smart contract address
      const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address deployed on Hardhat

      const ibFactory = await ethers.getContractFactory("InflationBased", owner);
      ib = (await ibFactory.deploy(inflationOracle, registrar, 60, baseCurrency)) as InflationBased;
      await ib.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(ib).to.not.be.undefined;
      expect(await ib.owner()).to.equal(owner.address);
      expect(await ib.i_registrar()).to.equal("0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2");
      expect(await ib.interval()).to.equal(60);
      expect(await ib.baseCurrency()).to.equal("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
    });
  });

  describe("Subscription function", function () {
    it("should create a subscription", async function () {
      const subscriptionType = 1;
      const amount = 100;
      const action = 1;
      const token1 = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // USDT in hardhat
      const token2 = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK in hardhat
      const liquidityPool = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // example liquidity pool address
      const subScriptionId = await ib.createSubscription(
        subscriptionType,
        amount,
        action,
        token1,
        token2,
        liquidityPool,
        10,
      );
      await subScriptionId.wait();
      expect(subScriptionId).not.to.equal(0);
    });
  });
});
