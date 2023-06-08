import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployTradingVolumeBased } from "../helpers/contract-deployments";
import { REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTradingVolumeBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  // const networkName = getNetworkName();
  // const supportedTokens = await getSupportedTokens(networkName);
  // const supportedTokensPriceFeeds = await getChainlinkPriceOracles(networkName);
  //const supportedDataFeedKeys = await getSupportedDataFeeds(networkName);
  //const { assets, sources } = mapTokenAddressToPriceFeeds(supportedTokens, supportedTokensPriceFeeds, networkName);

  //const oracleId = (await deployments.get("DinamikoFeedOracle")).address;
  //const link = (await deployments.get("LinkToken")).address;
  const registrar = REGISTRAR; //The address of the Chainlink Automation registry contract - adjust with the correct value
  const updateInterval = UPDATEINTERVAL;
  //const transactionsAddress = (await deployments.get("Transactions")).address; //??
  //const usdtAddress = (await deployMockToken("USDT", MOCK_TOKEN_LIST["USDT"])).address; //??

  const transactionsAddress = "0x0000000000000000000000000000000000000000"; //Random number for testing - necessary to adjust woth the deployment address of Transaction.sol
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address

  log("Deploying Trading Volume Based ...");
  console.log(
    "Link token address",
    link,
    "\n",
    "Keeper registry",
    registrar,
    "\n",
    "Update time interval:",
    updateInterval,
    "\n",
    "Transaction address:",
    transactionsAddress,
    "\n",
  );
  await deployTradingVolumeBased(link, transactionsAddress);
};

export default deployTradingVolumeBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTradingVolumeBasedContract.tags = ["TradingVolumeBased"];
