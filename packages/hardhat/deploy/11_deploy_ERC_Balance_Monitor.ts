import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { getNetworkName } from "../helpers/utilities/utils";
import { deployERC20BalanceMonitor } from "../helpers/contract-deployments";
import { KEEP_REGISTRY, MIN_WAIT_PERIOD_SECONDS } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployERC20BalanceMonitorContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  //const networkName = getNetworkName();
  const erc20TokenAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
  const keeperRegistryAddress = KEEP_REGISTRY;
  const minWaitPeriodSeconds = MIN_WAIT_PERIOD_SECONDS;

  log("Deploying ERC20 Balance Monitor ...");
  console.log(
    "\n",
    "ERC20 Token address:",
    erc20TokenAddress,
    "\n",
    "Registry address:",
    keeperRegistryAddress,
    "\n",
    "Min wait per  second:",
    minWaitPeriodSeconds,
  );
  await deployERC20BalanceMonitor(erc20TokenAddress, keeperRegistryAddress, minWaitPeriodSeconds);
  log("Done \n \n");
};

export default deployERC20BalanceMonitorContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployERC20BalanceMonitorContract.tags = ["ERC20BalanceMonitor"];
