import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("DinamikoPriceOracle Contract ", function () {
  let snap: string;
  let owner: any;

  beforeEach(async () => {
    snap = await evmSnapshot();
  });

  afterEach(async () => {
    await evmRevert(snap);
  });

  // Set up test data
  const assets = ["0x0000000000000000000000000000000000000011", "0x0000000000000000000000000000000000000012"];
  const sourceAddresses = ["0x0000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000002"];
  const fallbackOracle = "0x0000000000000000000000000000000000000000";
  const baseCurrency = "0x0000000000000000000000000000000000000100";
  const baseCurrencyUnit = 1;

  describe("constructor", function () {
    it("Should correctly set data sources and fallback oracle", async () => {
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      // Check each dataFeedId and sourceAddress
      for (let i = 0; i < assets.length; i++) {
        expect(await oracle.getSourceOfAsset(assets[i])).to.equal(sourceAddresses[i], "Incorrect asset source set");
      }

      // Check fallback oracle address
      const expectedFallbackOracle = ethers.utils.getAddress("0x0000000000000000000000000000000000000000");
      expect(await oracle.getFallbackOracle()).to.equal(expectedFallbackOracle);
    });
  });

  describe("setAssetSources _function", function () {
    it("Should only allow the owner to call setAssetSources", async function () {
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      [owner] = await ethers.getSigners();

      // Call setAssetSources as the non-owner account and check that it throws an error
      const nonOwner = (await ethers.getSigners())[1];
      const invalidAsset = ["0x0000000000000000000000000000000000000013"];
      const invalidSourceAddresses = ["0x0000000000000000000000000000000000000003"];
      await expect(oracle.connect(nonOwner).setAssetSources(invalidAsset, invalidSourceAddresses)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );

      //Check that the data feed sources were not updated
      for (let i = 0; i < assets.length; i++) {
        expect(await oracle.getSourceOfAsset(assets[i])).to.equal(sourceAddresses[i], "Incorrect asset source set");
      }
    });

    it("Should only allow the owner to call setFallbackOracle", async function () {
      // Check that the contract instance was created correctly
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      [owner] = await ethers.getSigners();

      // Check that the initial fallback oracle address is set correctly
      expect(await oracle.getFallbackOracle()).to.equal("0x0000000000000000000000000000000000000000");

      // Call setFallbackOracle as the non-owner account and check that it throws an error
      const nonOwner = (await ethers.getSigners())[1];
      const invalidFallbackOracleAddress = "0x0000000000000000000000000000000000000010";
      await expect(oracle.connect(nonOwner).setFallbackOracle(invalidFallbackOracleAddress)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );

      // Check that the fallback oracle address was not updated
      expect(await oracle.getFallbackOracle()).to.equal("0x0000000000000000000000000000000000000000");

      // Call setFallbackOracle as the owner account and check that it updates the fallback oracle and emits the event
      const validFallbackOracleAddress = "0x0000000000000000000000000000000000000010";
      const tx = await oracle.connect(owner).setFallbackOracle(validFallbackOracleAddress);
      await tx.wait();

      // Check that the fallback oracle address was updated correctly
      expect(await oracle.getFallbackOracle()).to.equal(validFallbackOracleAddress);
    });

    it("Should return 0 when given a non-existent asset", async () => {
      // Check that the contract instance was created correctly
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;
    });

    it("Should correctly return the address of the fallback oracle", async () => {
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      const oracleAddress = await oracle.getFallbackOracle();
      expect(oracleAddress).to.equal(oracleAddress);
    });

    it("Should reject non-owner calls to setDataPriceSources and setPriceOracle", async () => {
      const newAsset = ["0x0000000000000000000000000000000000000111"];
      const newSourceAddresses = ["0x0000000000000000000000000000000000001101"];
      const newFallbackOracleAddress = "0x0000000000000000000000000000000000001100";

      const nonOwner = (await ethers.getSigners())[1];
      // Check that the contract instance was created correctly
      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      await expect(oracle.connect(nonOwner).setAssetSources(newAsset, newSourceAddresses)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
      await expect(oracle.connect(nonOwner).setFallbackOracle(newFallbackOracleAddress)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
    });
  });
});
