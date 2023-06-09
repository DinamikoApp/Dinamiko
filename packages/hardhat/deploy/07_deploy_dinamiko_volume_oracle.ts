import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployDinamikoVolumeOracle } from "../helpers/contract-deployments";
import { LINK_ORACLE } from "../helpers/constants";

/**
 * Deploys a contract named "DinamikoVolumeOracle" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDinamikoVolumeOracleContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const linkOracle = LINK_ORACLE; //Chainlink oracle address

  //In the constructor is a bytes32, so it is necessary a conversion of the const JOB_ID in the constants.ts file
  const jobId = "0x6432323065356536383738383434363239303961303330323133383562376165"; //adjust with the correct value
  const symbol = "LINK";

  log("Deploying Dinamiko Volume Oracle...");
  console.log(
    "Token link address:",
    link,
    "\n",
    "Link Oracle address:",
    linkOracle,
    "\n",
    "Job Id:",
    jobId,
    "\n",
    "Symbol:",
    symbol,
    "\n",
  );
  await deployDinamikoVolumeOracle(link, linkOracle, jobId, symbol);
  log("Done \n \n");
};

export default deployDinamikoVolumeOracleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployDinamikoVolumeOracleContract.tags = ["DinamikoVolumeOracle"];
