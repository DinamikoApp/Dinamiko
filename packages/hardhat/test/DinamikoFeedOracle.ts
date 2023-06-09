// import { DinamikoFeedOracle, MockV3Aggregator } from "../typechain-types";
import { ethers } from "hardhat";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { expect } from "chai";

describe("DinamikoFeedOracle Contract ", function () {
  let snap: string;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });
  afterEach(async () => {
    await evmRevert(snap);
  });

  let owner: any;

  const fallbackOracleAddress = "0x0000000000000000000000000000000000000000";
  const dataFeedIds = ["30DayETHAPR", "90DayETHAPR"].map(ethers.utils.formatBytes32String);
  const sourceAddresses = ["0x0000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000002"];

  beforeEach(async () => {
    const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    await oracle.deployed();
    console.log("The oracle contract address is: ", oracle.address);
  });

  describe("constructor", function () {
    it("Should correctly set data sources and fallback oracle", async () => {
      const instance = await ethers.getContractFactory("DinamikoFeedOracle");
      const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
      await oracle.deployed();

      // Check that the contract instance was created correctly
      expect(oracle).to.not.be.undefined;

      //Check that each data feed ID and source address is set correctly
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("30DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000001",
      );
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("90DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000002",
      );

      console.log(
        "The 30DayETHAPR data feed sources addresses is: ",
        await oracle.getSourceOfData(ethers.utils.formatBytes32String("30DayETHAPR")),
      );
      console.log(
        "The 90DayETHAPR data feed sources addresses is: ",
        await oracle.getSourceOfData(ethers.utils.formatBytes32String("90DayETHAPR")),
      );

      // Check that the fallback oracle address is set correctly
      const expectedFallbackOracle = ethers.utils.getAddress("0x0000000000000000000000000000000000000000");
      expect(await oracle.getFallbackOracle()).to.equal(expectedFallbackOracle);
      console.log("The fallback oracle address is: ", await oracle.getFallbackOracle());
    });
  });

  describe("setDataFeedSources _function", function () {
    it("Should only allow the owner to call setDataFeedSources", async function () {
      const instance = await ethers.getContractFactory("DinamikoFeedOracle");
      const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
      await oracle.deployed();
      //console.log("The oracle contract address is: ", oracle.address);
      [owner] = await ethers.getSigners();

      // Call setDataFeedSources as the non-owner account and check that it throws an error
      const nonOwner = (await ethers.getSigners())[1];
      const invalidDataFeedIds = ["30DayETHAPR"].map(ethers.utils.formatBytes32String);
      const invalidSourceAddresses = ["0x0000000000000000000000000000000000000003"];
      await expect(
        oracle.connect(nonOwner).setDataFeedSources(invalidDataFeedIds, invalidSourceAddresses),
      ).to.be.revertedWith("Ownable: caller is not the owner");
      console.log("Only the owner can call setDataFeedSources");

      //Check that the data feed sources were not updated
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("30DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000001",
      );
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("90DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000002",
      );

      // Call setDataFeedSources as the owner account and check that it updates the data feed sources and emits the event
      const validDataFeedIds = ["30DayETHAPR"].map(ethers.utils.formatBytes32String);
      const validSourceAddresses = ["0x0000000000000000000000000000000000000003"];
      const tx = await oracle.connect(owner).setDataFeedSources(validDataFeedIds, validSourceAddresses);
      await tx.wait();

      // Check that the data feed sources were updated correctly
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("30DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000003",
      );
      expect(await oracle.getSourceOfData(ethers.utils.formatBytes32String("90DayETHAPR"))).to.equal(
        "0x0000000000000000000000000000000000000002",
      );
      console.log(
        "The 30DayETHAPR data feed sources was updated by the owner: ",
        await oracle.getSourceOfData(ethers.utils.formatBytes32String("30DayETHAPR")),
      );
    });

    it("Should only allow the owner to call setFallbackOracle", async function () {
      // Check that the contract instance was created correctly
      const instance = await ethers.getContractFactory("DinamikoFeedOracle");
      const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
      await oracle.deployed();
      expect(oracle).to.not.be.undefined;

      // Check that the initial fallback oracle address is set correctly
      expect(await oracle.getFallbackOracle()).to.equal("0x0000000000000000000000000000000000000000");

      // Call setFallbackOracle as the non-owner account and check that it throws an error
      const nonOwner = (await ethers.getSigners())[1];
      const invalidFallbackOracleAddress = "0x0000000000000000000000000000000000000010";
      await expect(oracle.connect(nonOwner).setFallbackOracle(invalidFallbackOracleAddress)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
      console.log("Only the owner can call setFallbackOracle");

      // Check that the fallback oracle address was not updated
      expect(await oracle.getFallbackOracle()).to.equal("0x0000000000000000000000000000000000000000");

      // Call setFallbackOracle as the owner account and check that it updates the fallback oracle and emits the event
      const validFallbackOracleAddress = "0x0000000000000000000000000000000000000010";
      const tx = await oracle.connect(owner).setFallbackOracle(validFallbackOracleAddress);
      await tx.wait();

      // Check that the fallback oracle address was updated correctly
      expect(await oracle.getFallbackOracle()).to.equal(validFallbackOracleAddress);
      console.log("The fallback oracle address was updated by the owner: ", await oracle.getFallbackOracle());
    });
  });

  it("Should return 0 when given a non-existent id", async () => {
    // Check that the contract instance was created correctly
    const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    await oracle.deployed();

    expect(oracle).to.not.be.undefined;

    const nonExistentFeedId = ethers.utils.formatBytes32String("nonExistentFeedId/USD");
    const result = await oracle.getFeedData(nonExistentFeedId);
    expect(result).to.equal(0);
    console.log("The id is non-existing. The result is: ", result.toNumber());
  });

  it("Should return the correct address for a given data feed id", async () => {
    const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    await oracle.deployed();

    const source = await oracle.getSourceOfData(dataFeedIds[0]);
    expect(source).to.equal(sourceAddresses[0]);
    expect(source).not.to.equal(sourceAddresses[1]);
    console.log("The 30DayETHAPR source address is: ", source);
  });

  it("Should correctly return the address of the fallback oracle", async () => {
    const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    await oracle.deployed();

    const oracleAddress = await oracle.getFallbackOracle();
    expect(oracleAddress).to.equal(fallbackOracleAddress);
    console.log("The fallback oracle address is: ", oracleAddress.toString());
  });

  it("Should reject non-owner calls to setDataFeedSources and setFallbackOracle", async () => {
    const newDataFeedIds = ["BTCIRBC1-Day", "BTCIRBC1-Week"].map(ethers.utils.formatBytes32String);
    const newSourceAddresses = [
      "0x0000000000000000000000000000000000000101",
      "0x0000000000000000000000000000000000000102",
    ];
    const newFallbackOracleAddress = "0x0000000000000000000000000000000000000100";

    //const [_, nonOwner] = await ethers.getSigners();
    const nonOwner = (await ethers.getSigners())[1];
    const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    await oracle.deployed();

    await expect(oracle.connect(nonOwner).setDataFeedSources(newDataFeedIds, newSourceAddresses)).to.be.revertedWith(
      "Ownable: caller is not the owner",
    );
    console.log("Only the owner can call setDataFeedSources");
    await expect(oracle.connect(nonOwner).setFallbackOracle(newFallbackOracleAddress)).to.be.revertedWith(
      "Ownable: caller is not the owner",
    );
    console.log("Only the owner can call setFallbackOracle");
  });
});
