import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DinamikoVolumeOracle } from "../typechain-types";

describe("DinamikoVolumeOracle Contract ", function () {
  let snap: string;
  let owner: SignerWithAddress;
  let dv: DinamikoVolumeOracle;

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

      const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
      const linkOracle = "0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD";
      const jobId = "d220e5e687884462909a03021385b7ae"; //adjust with the correct value
      const symbol = "ETH";

      const dvFactory = await ethers.getContractFactory("DinamikoVolumeOracle", owner);
      dv = (await dvFactory.deploy(link, linkOracle, jobId, symbol)) as DinamikoVolumeOracle;
      await dv.deployed();
    });

    it("Should set the correct values in the constructor", async () => {
      expect(dv).to.not.be.undefined;
    });
  });
});
