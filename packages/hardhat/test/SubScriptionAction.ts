import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";
import { FACTORYADDRESS, ROUTERADDRESS } from "../helpers/constants";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SubscriptionAction } from "../typechain-types";

describe("SubscriptionAction Contract ", function () {
  let snap: string;
  let deployer: SignerWithAddress;
  let subscriptionAction: SubscriptionAction;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });

  afterEach(async () => {
    await evmRevert(snap);
  });

  // Set up test data
  const routerAddress = ROUTERADDRESS; //Uniswap router address 0x09635F643e140090A9A8Dcd712eD6285858ceBef
  const factoryAddress = FACTORYADDRESS; //Uniswap factory address 0xc5a5C42992dECbae36851359345FE25997F5C42d

  describe("constructor", function () {
    it("Should set the correct values in the constructor", async () => {
      [deployer] = await ethers.getSigners();

      const subscriptionActionFactory = await ethers.getContractFactory("SubscriptionAction", deployer);
      subscriptionAction = (await subscriptionActionFactory.deploy(
        routerAddress,
        factoryAddress,
      )) as SubscriptionAction;
      await subscriptionAction.deployed();

      expect(await subscriptionAction.factoryAddress()).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
    });
  });

  describe("Swap _function", function () {
    it("should swap tokens correctly when buying asset", async function () {
      const purchaseToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      const amount = ethers.utils.parseEther("1");
      const receiver = deployer.address;
      // const tokenIn = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      // const swapRouter = "0xc5a5C42992dECbae36851359345FE25997F5C42d";

      [deployer] = await ethers.getSigners();

      const subscriptionActionFactory = await ethers.getContractFactory("SubscriptionAction", deployer);
      subscriptionAction = (await subscriptionActionFactory.deploy(
        routerAddress,
        factoryAddress,
      )) as SubscriptionAction;
      await subscriptionAction.deployed();

      // Approve the transfer of tokens
      const purchaseTokenContract = await ethers.getContractAt("Token", purchaseToken);
      await purchaseTokenContract.approve(subscriptionAction.address, amount);

      // Call the buyAsset function
      const tx = await subscriptionAction.buyAsset(purchaseToken, amount, receiver);

      // Check the emitted Transaction event
      const receipt = await tx.wait();
      const event = receipt.events.pop();
      expect(event.event).to.equal("Transaction");
      expect(event.args.from).to.equal(deployer.address);
      expect(event.args.to).to.equal(receiver);
      expect(event.args.amountOut).to.be.gt(0);
    });

    it("should swap tokens correctly when selling token", async function () {
      [deployer] = await ethers.getSigners();

      const sellToken = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; // LINK token on hardhat
      const amount = ethers.utils.parseEther("1");
      const receiver = deployer.address;

      // Approve the transfer of tokens
      const sellTokenContract = await ethers.getContractAt("SubscriptionAction", deployer.address);
      await sellTokenContract.approve(subscriptionAction.address, amount);

      // Call the sellToken function
      const tx = await subscriptionAction.sellToken(sellToken, amount, receiver);

      // Check the emitted Transaction event
      const receipt = await tx.wait();
      const event = receipt.events.pop();
      expect(event.event).to.equal("Transaction");
      expect(event.args.from).to.equal(deployer.address);
      expect(event.args.to).to.equal(receiver);
      expect(event.args.amountOut).to.be.gt(0);
    });
  });
});
