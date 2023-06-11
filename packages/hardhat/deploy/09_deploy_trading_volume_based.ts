import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getChainLinkKeys, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { deployTradingVolumeBased } from "../helpers/contract-deployments";

/**
 * Deploys a contract named "TradingVolumeBased" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTradingVolumeBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    log("Deploying Trading Volume  Based ...");
    await deployTradingVolumeBased(REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    log("Done \n \n");
  }
};

export default deployTradingVolumeBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTradingVolumeBasedContract.tags = ["TradingVolumeBased"];
