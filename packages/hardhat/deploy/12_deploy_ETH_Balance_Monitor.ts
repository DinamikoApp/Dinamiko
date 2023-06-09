import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { getNetworkName } from "../helpers/utilities/utils";
import { deployEthBalanceMonitor } from "../helpers/contract-deployments";
import { KEEP_REGISTRY, MIN_WAIT_PERIOD_SECONDS } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployEthBalanceMonitorContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  //const networkName = getNetworkName();
  const keeperRegistryAddress = KEEP_REGISTRY;
  const minWaitPeriodSeconds = MIN_WAIT_PERIOD_SECONDS;

  log("Deploying Eth Balance Monitor ...");
  console.log("Registry address:", keeperRegistryAddress, "\n", "Min wait per  second:", minWaitPeriodSeconds);
  await deployEthBalanceMonitor(keeperRegistryAddress, minWaitPeriodSeconds);
  log("Done \n \n");
};

export default deployEthBalanceMonitorContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployEthBalanceMonitorContract.tags = ["EthBalanceMonitor"];
