// import { DinamikoPriceOracle, MockV3Aggregator } from "../typechain-types";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
//import { deployMockToken, deployMockV3Aggregator } from "../helpers/contract-deployments";
//import { MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES } from "../helpers/constants";
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

  // We define a fixture to reuse the same setup in every test.

  // let dinamikoPriceOracle: DinamikoPriceOracle;
  // let mockToken: MintableERC20;
  // let mockAggregator: MockV3Aggregator;
  // let assetPrice: string;

  // Set up test data
  const assets = ["0x0000000000000000000000000000000000000011", "0x0000000000000000000000000000000000000012"];
  const sourceAddresses = ["0x0000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000002"];
  const fallbackOracle = "0x0000000000000000000000000000000000000000";
  const baseCurrency = "0x0000000000000000000000000000000000000100";
  const baseCurrencyUnit = 1;
  //const assetPrice = ["2000", "1"];

  // before(async () => {
  //   mockToken = await deployMockToken("MOCK", "Mock Token");
  //   assetPrice = MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES.ETH;
  //   mockAggregator = (await deployMockV3Aggregator("MOCK", assetPrice)) as unknown as MockV3Aggregator;
  // });

  describe("constructor", function () {
    it("Should correctly set data sources and fallback oracle", async () => {
      //const sourceAddresses = [mockAggregator.address];

      const instance = await ethers.getContractFactory("DinamikoPriceOracle");
      const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
      await oracle.deployed();

      expect(oracle).to.not.be.undefined;

      // Check each dataFeedId and sourceAddress
      for (let i = 0; i < assets.length; i++) {
        expect(await oracle.getSourceOfAsset(assets[i])).to.equal(sourceAddresses[i], "Incorrect asset source set");
        console.log("The source address for asset ", assets[i], " is: ", await oracle.getSourceOfAsset(assets[i]));
      }

      // Check fallback oracle address
      const expectedFallbackOracle = ethers.utils.getAddress("0x0000000000000000000000000000000000000000");
      expect(await oracle.getFallbackOracle()).to.equal(expectedFallbackOracle);
      console.log("The fallback oracle address is: ", await oracle.getFallbackOracle());
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
      console.log("Only the owner can call setAssetSources");

      //Check that the data feed sources were not updated
      for (let i = 0; i < assets.length; i++) {
        expect(await oracle.getSourceOfAsset(assets[i])).to.equal(sourceAddresses[i], "Incorrect asset source set");
        console.log("The source address for asset ", assets[i], " is: ", await oracle.getSourceOfAsset(assets[i]));
      }

      // Call setAssetSources as the owner account and check that it updates the data feed sources
      // const validAsset = ["0x0000000000000000000000000000000000000011"];
      // const validSourceAddresses = ["0x0000000000000000000000000000000000000003"];
      // const tx = await oracle.connect(owner).setAssetSources(validAsset, validSourceAddresses);
      // const receipt = await tx.wait();

      // //Check that the data feed sources were not updated
      // for (let i = 0; i < assets.length; i++) {
      //   expect(await oracle.getSourceOfAsset(assets[i])).to.equal(sourceAddresses[i], "Incorrect asset source set");
      //   console.log("The source address for asset ", assets[i], " is: ", await oracle.getSourceOfAsset(assets[i]));
      // }
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

  it("Should return the correct data if the source aggregator returns a positive result", async function () {
    // Function test
  });

  it("Should return the correct data from the fallback oracle if the source aggregator returns a negative result or zero", async () => {
    // Function test
  });

  it("Should return 0 when given a non-existent asset", async () => {
    // Check that the contract instance was created correctly
    const instance = await ethers.getContractFactory("DinamikoPriceOracle");
    const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
    await oracle.deployed();

    expect(oracle).to.not.be.undefined;

    // const nonExistentAsset = ethers.utils.getAddress("0x0000000000000000000000000000000000001000");
    // const result = await oracle.getAssetPrice(nonExistentAsset);
    // expect(result).to.equal(0);
    // console.log("The id is non-existing. The result is: ", result.toNumber());
  });

  it("Should return an array with the correct pirce for multiple assets", async () => {
    // // Mock the source aggregators to return specific results for each id
    const instance = await ethers.getContractFactory("DinamikoPriceOracle");
    const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
    await oracle.deployed();

    expect(oracle).to.not.be.undefined;

    // const results = await oracle.getAssetsPrices(assets);
    // console.log("The results are: ", results);
    // expect(results[0]).to.equal(assetPrice[0]);
    // expect(results[1]).to.equal(assetPrice[1]);
  });

  it("Should return the correct price for a given asset", async () => {
    const instance = await ethers.getContractFactory("DinamikoPriceOracle");
    const oracle = await instance.deploy(assets, sourceAddresses, fallbackOracle, baseCurrency, baseCurrencyUnit);
    await oracle.deployed();

    expect(oracle).to.not.be.undefined;

    // const assetZero = ethers.utils.getAddress(assets[0]);
    // const returnedAssetPrice = await oracle.getAssetPrice(assetZero);
    // expect(returnedAssetPrice).to.equal(assetPrice[0]);
    // console.log("The price of asset ", returnedAssetPrice, " is: ", assetPrice);
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
    console.log("Only the owner can call setDataFeedSources");
    await expect(oracle.connect(nonOwner).setFallbackOracle(newFallbackOracleAddress)).to.be.revertedWith(
      "Ownable: caller is not the owner",
    );
    console.log("Only the owner can call setFallbackOracle");
  });
});
