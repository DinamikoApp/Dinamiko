import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName } from "../helpers/utilities/utils";
import { deployMockToken, deployPriceBasedSubscriptions } from "../helpers/contract-deployments";
import {
  getChainlinkPriceOracles,
  getSupportedDataFeeds,
  getSupportedTokens,
  mapByte32IdToDataFeedsAddress,
  mapTokenAddressToPriceFeeds,
} from "../helpers/deploy-config-helper";
import { MOCK_TOKEN_LIST, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";
import { ethers } from "hardhat";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployPriceBasedSubscriptionsContract: DeployFunction = async function ({
  deployments,
}: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const networkName = getNetworkName();
  const supportedTokens = await getSupportedTokens(networkName);
  const supportedTokensPriceFeeds = await getChainlinkPriceOracles(networkName);
  const supportedDataFeedKeys = await getSupportedDataFeeds(networkName);
  const { assets, sources } = mapTokenAddressToPriceFeeds(supportedTokens, supportedTokensPriceFeeds, networkName);

  const oracleAddress = (await deployments.get("DinamikoPriceOracle")).address;
  const link = (await deployments.get("LinkToken")).address;
  const registrar = REGISTRAR;
  const updateInterval = UPDATEINTERVAL;
  const transactionsAddress = (await deployments.get("Transactions")).address; //??
  //const usdtAddress = (await deployMockToken("USDT", MOCK_TOKEN_LIST["USDT"])).address; //??
  const usdtAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  log("Deploying Price Feed Based ...");
  console.log(oracleAddress, link, registrar, updateInterval, transactionsAddress, usdtAddress);
  await deployPriceBasedSubscriptions(oracleAddress, link, registrar, updateInterval, transactionsAddress, usdtAddress);
};

export default deployPriceBasedSubscriptionsContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployPriceBasedSubscriptionsContract.tags = ["PriceBasedSubscriptions"];
