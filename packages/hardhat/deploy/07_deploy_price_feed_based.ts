import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployPriceFeedBased } from "../helpers/contract-deployments";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { PRICE_ORACLE } from "../helpers/constants";

/**
 * Deploys a contract named "PriceFeedBased" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployPriceFeedBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const priceFeedOracle = await getDeployedConfig(networkName, PRICE_ORACLE);
    const priceOracleAddress = Object.values(priceFeedOracle)[0];
    console.log(`\n \n PriceFeedOracle at ${priceOracleAddress} \n \n`);
    log("Deploying Price Feed Based ...");
    await deployPriceFeedBased(priceOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    log("Done \n \n");
  }
};

export default deployPriceFeedBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployPriceFeedBasedContract.tags = ["PriceFeedBased"];
