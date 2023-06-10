import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SubscriptionAction } from "../typechain-types";

describe("SubscriptionAction Contract ", function () {
  let snap: string;
  let sa: SubscriptionAction;
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

      const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; //Uniswap router address 0x09635F643e140090A9A8Dcd712eD6285858ceBef
      const factoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"; //Uniswap factory address 0xc5a5C42992dECbae36851359345FE25997F5C42d

      const saFactory = await ethers.getContractFactory("SubscriptionAction", owner);

      sa = (await saFactory.deploy(routerAddress, factoryAddress)) as SubscriptionAction;
    });

    it("Should set the correct values in the constructor", async () => {
      expect(await sa.factoryAddress()).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
    });
  });

  describe("Swap _function", function () {
    it("should swap tokens correctly when buying asset", async function () {
      const accounts = await ethers.getSigners();
      owner = accounts[0];
      const purchaseToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      const amount = ethers.utils.parseEther("1");
      const receiver = accounts[1];
      // const tokenIn = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      // const swapRouter = "0xc5a5C42992dECbae36851359345FE25997F5C42d";

      // Approve the transfer of tokens
      const purchaseTokenContract = await ethers.getContractAt("Token", purchaseToken);
      await purchaseTokenContract.approve(sa.address, amount);

      // Call the buyAsset function
      const tx = await sa.buyAsset(purchaseToken, amount, receiver.address);

      // Check the emitted Transaction event
      await tx.wait();
      // const event = receipt.events.pop();
      // expect(event.event).to.equal("Transaction");
      // expect(event.args.from).to.equal(deployer.address);
      // expect(event.args.to).to.equal(receiver);
      // expect(event.args.amountOut).to.be.gt(0);
    });

    it("should swap tokens correctly when selling token", async function () {
      // [deployer] = await ethers.getSigners();
      // const sellToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      // const amount = ethers.utils.parseEther("1");
      // const receiver = deployer.address;
      // // Approve the transfer of tokens
      // const sellTokenContract = await ethers.getContractAt("SubscriptionAction", deployer.address);
      // await sellTokenContract.approve(subscriptionAction.address, amount);
      // // Call the sellToken function
      // const tx = await subscriptionAction.sellToken(sellToken, amount, receiver);
      // // Check the emitted Transaction event
      // const receipt = await tx.wait();
      // const event = receipt.events.pop();
      // expect(event.event).to.equal("Transaction");
      // expect(event.args.from).to.equal(deployer.address);
      // expect(event.args.to).to.equal(receiver);
      // expect(event.args.amountOut).to.be.gt(0);
    });
  });
});
