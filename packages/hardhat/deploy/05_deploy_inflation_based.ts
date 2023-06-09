import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployInflationBased } from "../helpers/contract-deployments";
import { FEE, JOB_ID, REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployInflationBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const fee = FEE; //Vary depending to the network
  const jobId = JOB_ID; //Chainlink Job_Id - adjust with the correct value
  const oracleId = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const registrar = REGISTRAR; //The address of the Chainlink Automation registry contract - adjust with the correct value
  const updateInterval = UPDATEINTERVAL;
  const baseCurrency = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; //USDC smart contract address

  log("Deploying Inflation Based ...");
  console.log(
    "Fee",
    fee,
    "\n",
    "JobId",
    jobId,
    "\n",
    "OracleId",
    oracleId,
    "\n",
    "Link token address",
    link,
    "\n",
    "Keeper registry",
    registrar,
    "\n",
    "Update time interval:",
    updateInterval,
    "\n",
    "Base Currency:",
    baseCurrency,
    "\n",
  );
  await deployInflationBased(fee, oracleId, link, baseCurrency);
};

export default deployInflationBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployInflationBasedContract.tags = ["InflationBased"];
