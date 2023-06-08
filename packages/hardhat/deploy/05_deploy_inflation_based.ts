import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployInflationRateBased } from "../helpers/contract-deployments";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployInflationRateBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  // const networkName = getNetworkName();
  // const supportedTokens = await getSupportedTokens(networkName);
  // const supportedTokensPriceFeeds = await getChainlinkPriceOracles(networkName);
  //const supportedDataFeedKeys = await getSupportedDataFeeds(networkName);
  //const { assets, sources } = mapTokenAddressToPriceFeeds(supportedTokens, supportedTokensPriceFeeds, networkName);

  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //Chainlink Job_Id - adjust with the correct value
  //const oracleId = (await deployments.get("DinamikoFeedOracle")).address;
  //const link = (await deployments.get("LinkToken")).address;
  const registrar = REGISTRAR; //The address of the Chainlink Automation registry contract - adjust with the correct value
  const updateInterval = UPDATEINTERVAL;
  //const transactionsAddress = (await deployments.get("Transactions")).address; //??
  //const usdtAddress = (await deployMockToken("USDT", MOCK_TOKEN_LIST["USDT"])).address; //??

  const oracleId = "0x4826533B4897376654Bb4d4AD88B7faFD0C98528"; //??
  const transactionsAddress = "0x0000000000000000000000000000000000000000"; //Random number for testing - necessary to adjust woth the deployment address of Transaction.sol
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const usdtAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT Token address

  log("Deploying Inflation Rate Based ...");
  console.log(
    "Fee",
    fee,
    "JobId",
    jobId,
    "Link token address",
    link,
    "Keeper registry",
    registrar,
    "Update time interval:",
    updateInterval,
    "Transaction address:",
    transactionsAddress,
    "USDT Address:",
    usdtAddress,
  );
  await deployInflationRateBased(fee, oracleId, link, transactionsAddress, usdtAddress);
};

export default deployInflationRateBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployInflationRateBasedContract.tags = ["PriceBasedSubscriptions"];
