import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
//import { getNetworkName } from "../helpers/utilities/utils";
import { deploySubscriptionAction } from "../helpers/contract-deployments";
import { FACTORYADDRESS, ROUTERADDRESS } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySubscriptionActionContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  //const networkName = getNetworkName();
  const routerAddress = ROUTERADDRESS; //Uniswap router address
  const factoryAddress = FACTORYADDRESS; //Uniswap factory address

  log("Deploying Subscription Actions ...");
  console.log("Router address:", routerAddress, "Factory address:", factoryAddress);
  await deploySubscriptionAction();
};

export default deploySubscriptionActionContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deploySubscriptionActionContract.tags = ["SubscriptionAction"];
