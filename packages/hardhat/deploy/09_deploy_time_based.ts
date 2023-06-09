import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployTimeBase } from "../helpers/contract-deployments";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "TimeBase" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTimeBaseContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The oracle price address
  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //adjust with the correct value
  const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const registrar = REGISTRAR; ////The address of the Chainlink Automation registry contract
  const updateInterval = UPDATEINTERVAL;
  const baseToken = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

  log("Deploying Time Based...");
  console.log(
    "Oracle address:",
    oracleAddress,
    "\n",
    "Fee:",
    fee.toString(),
    "Job Id:",
    jobId,
    "Oracle Id:",
    oracleId,
    "Link address:",
    link,
    "\n",
    "Keeper registry:",
    registrar,
    "\n",
    "Update time interval:",
    updateInterval,
    "\n",
    "Base token:",
    baseToken,
    "\n",
  );
  await deployTimeBase(oracleAddress, fee, oracleId, link, baseToken);
  log("Done \n \n");
};

export default deployTimeBaseContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTimeBaseContract.tags = ["TimeBase"];
