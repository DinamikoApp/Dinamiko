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

  describe("Swap _function", function () {
    it("should swap tokens correctly when buying asset", async function () {
      //       //   const purchaseToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      //       //   const amount = ethers.utils.parseEther("1");
      //       //   const receiver = deployer.address;
      //       //   // const tokenIn = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      //       //   // const swapRouter = "0xc5a5C42992dECbae36851359345FE25997F5C42d";
      //       //   [deployer] = await ethers.getSigners();
      //       //   const subscriptionActionFactory = await ethers.getContractFactory("SubscriptionAction", deployer);
      //       //   subscriptionAction = (await subscriptionActionFactory.deploy(
      //       //     routerAddress,
      //       //     factoryAddress,
      //       //   )) as SubscriptionAction;
      //       //   await subscriptionAction.deployed();
      //       //   // Approve the transfer of tokens
      //       //   const purchaseTokenContract = await ethers.getContractAt("Token", purchaseToken);
      //       //   await purchaseTokenContract.approve(subscriptionAction.address, amount);
      //       //   // Call the buyAsset function
      //       //   const tx = await subscriptionAction.buyAsset(purchaseToken, amount, receiver);
      //       //   // Check the emitted Transaction event
      //       //   const receipt = await tx.wait();
      //       //   const event = receipt.events.pop();
      //       //   expect(event.event).to.equal("Transaction");
      //       //   expect(event.args.from).to.equal(deployer.address);
      //       //   expect(event.args.to).to.equal(receiver);
      //   expect(event.args.amountOut).to.be.gt(0);
    });

    it("should swap tokens correctly when selling token", async function () {
      //       //   [deployer] = await ethers.getSigners();
      //       //   const sellToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      //       //   const amount = ethers.utils.parseEther("1");
      //       //   const receiver = deployer.address;
      //       //   // Approve the transfer of tokens
      //       //   const sellTokenContract = await ethers.getContractAt("SubscriptionAction", deployer.address);
      //       //   await sellTokenContract.approve(subscriptionAction.address, amount);
      //       //   // Call the sellToken function
      //       //   const tx = await subscriptionAction.sellToken(sellToken, amount, receiver);
      //       //   // Check the emitted Transaction event
      //       //   const receipt = await tx.wait();
      //       //   const event = receipt.events.pop();
      //       //   expect(event.event).to.equal("Transaction");
      //       //   expect(event.args.from).to.equal(deployer.address);
      //       //   expect(event.args.to).to.equal(receiver);
      //       //   expect(event.args.amountOut).to.be.gt(0);
      //     });
      //   });
    });
  });
});
