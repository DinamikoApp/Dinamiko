import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployDataFeedBased } from "../helpers/contract-deployments";
import { FEED_ORACLE } from "../helpers/constants";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";

/**
 * Deploys a contract named "DinamikoVolumeOracle" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDataFeedBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const dataFeedOracle = await getDeployedConfig(networkName, FEED_ORACLE);
    const dataFeedOracleAddress = Object.values(dataFeedOracle)[0];
    console.log(`\n \n Data Feed At at ${dataFeedOracleAddress} \n \n`);
    log("Deploying Data Based ...");
    await deployDataFeedBased(dataFeedOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    log("Done \n \n");
  }
};

export default deployDataFeedBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployDataFeedBasedContract.tags = ["DataFeedBased"];
