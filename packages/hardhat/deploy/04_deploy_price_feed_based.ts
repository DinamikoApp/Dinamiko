import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployPriceBasedSubscriptions } from "../helpers/contract-deployments";
import { REGISTRAR, UPDATEINTERVAL } from "../helpers/constants";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployPriceBasedSubscriptionsContract: DeployFunction = async function ({
  deployments,
}: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  // const oracleAddress = (await deployments.get("DinamikoPriceOracle")).address;
  // const link = (await deployments.get("LinkToken")).address;
  const registrar = REGISTRAR; ////The address of the Chainlink Automation registry contract
  const updateInterval = UPDATEINTERVAL;
  //const transactionsAddress = (await deployments.get("Transactions")).address; //??

  const oracleAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"; //The DinamikoPriceOracle deployment address
  const link = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //Link token address
  const transactionsAddress = "0x0000000000000000000000000000000000000000"; //Random number for testing - necessary to adjust woth the deployment address of Transaction.sol
  const usdtAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; //USDT token address

  log("Deploying Price Feed Based ...");
  console.log(
    "Oracle address:",
    oracleAddress,
    "Link address:",
    link,
    "Keeper registry:",
    registrar,
    "Update time interval:",
    updateInterval,
    "Transaction address:",
    transactionsAddress,
    "USDT Address:",
    usdtAddress,
  );
  await deployPriceBasedSubscriptions(oracleAddress, link, transactionsAddress, usdtAddress);
};

export default deployPriceBasedSubscriptionsContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployPriceBasedSubscriptionsContract.tags = ["PriceBasedSubscriptions"];
