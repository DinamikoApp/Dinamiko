import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deploySubscriptionAction } from "../helpers/contract-deployments";
import { getUniswapKeys } from "../helpers/deploy-config-helper";

/**
 * Deploys a contract named "SubscriptionAction" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySubscriptionActionContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const uniswapKeys = await getUniswapKeys();
  if (uniswapKeys !== undefined) {
    const { FACTORY_ADDRESS, SWAP_ROUTER_ADDRESS } = uniswapKeys;
    await deploySubscriptionAction(FACTORY_ADDRESS, SWAP_ROUTER_ADDRESS);
  }
  log("Done \n \n");
};

export default deploySubscriptionActionContract;

// Tags are useful if you have multiple deploy files and only wanthar to run one of them.
// e.g. yarn deploy --tags YourContracts
deploySubscriptionActionContract.tags = ["SubscriptionAction"];
