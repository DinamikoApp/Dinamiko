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
      await sa.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(await sa.factoryAddress()).to.equal("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
    });
  });
});
