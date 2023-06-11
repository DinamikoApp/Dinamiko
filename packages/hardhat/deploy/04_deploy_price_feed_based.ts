import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployPriceFeedBased } from "../helpers/contract-deployments";

/**
 * Deploys a contract named "PriceFeedBased" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployPriceFeedBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The oracle price address
  const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address

  log("Deploying Price Feed Based ...");
  await deployPriceFeedBased(oracleAddress, baseCurrency);
  log("Done \n \n");
};

export default deployPriceFeedBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployPriceFeedBasedContract.tags = ["PriceFeedBased"];
