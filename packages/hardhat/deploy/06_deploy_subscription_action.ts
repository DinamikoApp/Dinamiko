import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deploySubscriptionAction } from "../helpers/contract-deployments";
import { FACTORYADDRESS, ROUTERADDRESS } from "../helpers/constants";

/**
 * Deploys a contract named "SubscriptionAction" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySubscriptionActionContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  //const networkName = getNetworkName();
  const routerAddress = ROUTERADDRESS; //Uniswap router address
  const factoryAddress = FACTORYADDRESS; //Uniswap factory address

  log("\n", "Deploying Subscription Actions ...");
  console.log("Router address:", routerAddress, "\n", "Factory address:", factoryAddress);
  await deploySubscriptionAction();
  log("Done \n \n");
};

export default deploySubscriptionActionContract;

// Tags are useful if you have multiple deploy files and only wanthar to run one of them.
// e.g. yarn deploy --tags YourContract
deploySubscriptionActionContract.tags = ["SubscriptionAction"];
