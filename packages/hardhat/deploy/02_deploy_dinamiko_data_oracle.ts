import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName } from "../helpers/utilities/utils";
import { deployDinamikoFeedsOracle } from "../helpers/contract-deployments";
import { getSupportedDataFeeds, mapByte32IdToDataFeedsAddress } from "../helpers/deploy-config-helper";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDinamikoFeedsOracleContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const networkName = await getNetworkName();
  const supportedDataFeedKeys = await getSupportedDataFeeds(networkName);
  const { ids, sources } = mapByte32IdToDataFeedsAddress(supportedDataFeedKeys, networkName);

  log("Deploying Data Oracle ...");
  await deployDinamikoFeedsOracle(ids, sources);
  log("Done \n \n");
};

export default deployDinamikoFeedsOracleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployDinamikoFeedsOracleContract.tags = ["DinamikoFeedsOracleContract"];
