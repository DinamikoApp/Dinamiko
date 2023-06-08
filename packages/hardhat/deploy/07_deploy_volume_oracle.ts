import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { getNetworkName } from "../helpers/utilities/utils";
import { deployVolumeOracle } from "../helpers/contract-deployments";
import { LINK_ORACLE } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployVolumeOracleContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const linkOracle = LINK_ORACLE; //Chainlink oracle address

  log("Deploying Volume Oracle ...");
  console.log("Token link address:", link, "\n", "Link Oracle address:", linkOracle, "\n");
  await deployVolumeOracle(link, linkOracle);
};

export default deployVolumeOracleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployVolumeOracleContract.tags = ["VolumeOracle"];
