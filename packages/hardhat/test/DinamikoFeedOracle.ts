// import { DinamikoFeedOracle, MockV3Aggregator } from "../typechain-types";
import { evmRevert, evmSnapshot } from "../helpers/utilities/tx";
// import { deployDataFeedAggregator } from "../helpers/contract-deployments";
// import { MOCK_CHAINLINK_DATA_FEEDS_AGGREGATORS } from "../helpers/constants";

describe("DinamikoFeedOracle Contract ", function () {
  let snap: string;
  // const key = "MOCKDATAFEED";

  beforeEach(async () => {
    snap = await evmSnapshot();
  });
  afterEach(async () => {
    await evmRevert(snap);
  });

  // We define a fixture to reuse the same setup in every test.

  // let dinamikoFeedOracle: DinamikoFeedOracle;
  // let mockAggregator: MockAggregator;
  // let dataFeeds: string[];
  // let aggregatorAddress: string[];

  // before(async () => {
  //   mockAggregator = (await deployDataFeedAggregator(
  //     key,
  //     MOCK_CHAINLINK_DATA_FEEDS_AGGREGATORS[key],
  //   )) as MockV3Aggregator;
  // });

  describe("constructor", function () {
    it("Should correctly set data sources and fallback oracle", async () => {
      // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
      // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
      // await oracle.deployed();
      // Check each dataFeedId and sourceAddress
      // Check fallback oracle address
    });

    it("Should correctly set data sources and fallback oracle", async () => {
      // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
      // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
      // await oracle.deployed();
      // Check each dataFeedId and sourceAddress
      // Check fallback oracle address
    });
  });

  describe("setDataFeedSources _function", function () {
    it("Should only allow the owner to call setDataFeedSources", async function () {
      // Function test
    });

    it("Should only allow the owner to call setFallbackOracle", async function () {
      // Function test
    });
  });

  it("Should return the correct data if the source aggregator returns a positive result", async function () {
    // Function test
  });

  it("Should return the correct data from the fallback oracle if the source aggregator returns a negative result or zero", async () => {
    // Function test
  });

  it("Should return 0 when given a non-existent id", async () => {
    // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    // await oracle.deployed();
    // const result = await oracle.getFeedData(nonExistentFeedId);
    // expect(result).to.equal(0);
  });

  it("Should return an array with the correct data for multiple data feed ids", async () => {
    // // Mock the source aggregators to return specific results for each id
    // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    // await oracle.deployed();
    // const results = await oracle.getFeedsData(multipleFeedIds);
    // // Verify that results match the expected results for each id
  });

  it("Should return the correct address for a given data feed id", async () => {
    // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    // await oracle.deployed();
    // const source = await oracle.getSourceOfData(testFeedId);
    // Verify that source matches the expected source for the given id
  });

  it("Should correctly return the address of the fallback oracle", async () => {
    // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    // await oracle.deployed();
    // const oracleAddress = await oracle.getFallbackOracle();
    // expect(oracleAddress).to.equal(fallbackOracleAddress);
  });

  it("Should reject non-owner calls to setDataFeedSources and setFallbackOracle", async () => {
    // const [_, nonOwner] = await ethers.getSigners();
    // const instance = await ethers.getContractFactory("DinamikoFeedOracle");
    // const oracle = await instance.deploy(dataFeedIds, sourceAddresses, fallbackOracleAddress);
    // await oracle.deployed();
    // await expect(oracle.connect(nonOwner).setDataFeedSources(newDataFeedIds, newSourceAddresses)).to.be.revertedWith("Ownable: caller is not the owner");
    // await expect(oracle.connect(nonOwner).setFallbackOracle(newFallbackOracleAddress)).to.be.revertedWith("Ownable: caller is not the owner");
  });
});

// Sure, here are some possible test cases in words for the DinamikoFeedOracle contract:
// 1. **Test Constructor:** Check if the constructor correctly sets the data sources and fallback oracle. Initialize a new contract instance with some test data feed ids, source addresses and a fallback oracle address, and then use getter functions to verify that these values were correctly set.
// 2. **Test Set Data Feed Sources:** Test if only the owner can call the `setDataFeedSources` function. Also check if it correctly updates the data sources mapping, and emits the `DataFeedSourceUpdated` event.
// 3. **Test Set Fallback Oracle:** Check if only the owner can call the `setFallbackOracle` function. Verify that it correctly updates the fallback oracle and emits the `FallbackOracleUpdated` event.
// 4. **Test Get Feed Data with Positive Result:** Using a known data feed id, ensure that the `getFeedData` function returns the correct data if the source aggregator returns a positive result.
// 5. **Test Get Feed Data with Negative Result:** Using a known data feed id, ensure that the `getFeedData` function returns the correct data from the fallback oracle if the source aggregator returns a negative result or zero.
// 6. **Test Get Feed Data with Non-Existent ID:** Check the behaviour of the `getFeedData` function when given a non-existent id. It should return 0.
// 7. **Test Get Feeds Data:** Check if the `getFeedsData` function returns an array with the correct data for multiple data feed ids.
// 8. **Test Get Source of Data:** Verify that the `getSourceOfData` function returns the correct address for a given data feed id.
// 9. **Test Get Fallback Oracle:** Check if the `getFallbackOracle` function correctly returns the address of the fallback oracle.
// 10. **Test Exceptional Cases:** Make sure that the contract correctly handles exceptions such as:
//     - Attempting to set data feed sources with mismatched arrays of ids and sources.
//     - Attempting to call `setDataFeedSources` and `setFallbackOracle` from non-owner accounts.
// Remember, these test cases will require you to mock the Chainlink Aggregators and your fallback oracle to return controlled results. For instance, you might want to create a mock Chainlink Aggregator that you can configure to return specific results (positive, zero, or negative) when queried.
