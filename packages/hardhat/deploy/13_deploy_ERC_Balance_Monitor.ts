import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { getNetworkName } from "../helpers/utilities/utils";
import { deployERC20BalanceMonitor } from "../helpers/contract-deployments";
import { VOLUME_ORACLE } from "../helpers/constants";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { INFLATION_ORACLE } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployERC20BalanceMonitorContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const LINK = tokens["LINK"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const inflationFeedOracle = await await getDeployedConfig(networkName, INFLATION_ORACLE);
    const volumeOracles = await getDeployedConfig(networkName, VOLUME_ORACLE);
    const inflationOracleAddress = Object.values(inflationFeedOracle)[0];

    /// the last address is for the volume Oracle Updater
    const volumeAddress = Object.values(volumeOracles);
    volumeAddress.pop();
    const contractAddress = [inflationOracleAddress, ...volumeAddress];
    const volumeMinimumLevel = Array(volumeAddress.length).fill(1);
    const volumeTopUp = Array(volumeAddress.length).fill(3);
    const topUpLevel = [10, ...volumeTopUp];
    const minimumLevel = [1, ...volumeMinimumLevel];

    console.log(`\n`);
    console.log(`Inflation Feed At at ${inflationOracleAddress}`);
    console.log(`\n`);

    log("Deploying Subscription Factory...");
    const monitorToken = await deployERC20BalanceMonitor(LINK, REGISTER, KEEPER_UPDATE_INTERVAL);
    await monitorToken.setWatchList(contractAddress, minimumLevel, topUpLevel);
    log("Done \n \n");
  }
};

export default deployERC20BalanceMonitorContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployERC20BalanceMonitorContract.tags = ["ERC20BalanceMonitor"];
