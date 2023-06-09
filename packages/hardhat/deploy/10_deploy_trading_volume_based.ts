import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployTradingVolumeBased } from "../helpers/contract-deployments";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "TradingVolumeBased" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTradingVolumeBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //adjust with the correct value
  const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const registrar = REGISTRAR; ////The address of the Chainlink Automation registry contract
  const updateInterval = UPDATEINTERVAL;
  const baseToken = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

  log("Deploying Trading Volume Based ...");

  console.log(
    "Fee:",
    fee.toString(),
    "\n",
    "Job Id:",
    jobId,
    "\n",
    "Oracle Id:",
    oracleId,
    "\n",
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
  await deployTradingVolumeBased(fee, oracleId, link, baseToken);
  log("Done \n \n");
};

export default deployTradingVolumeBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTradingVolumeBasedContract.tags = ["TradingVolumeBased"];
