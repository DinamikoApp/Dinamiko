import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployTimeBase } from "../helpers/contract-deployments";
import { PRICE_ORACLE } from "../helpers/constants";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
deployTimeBase;

/**
 * Deploys a contract named "TimeBase" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTimeBaseContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const priceFeedOracle = await getDeployedConfig(networkName, PRICE_ORACLE);
    const priceOracleAddress = Object.values(priceFeedOracle)[0];
    console.log(`\n \n Price Oracle at ${priceOracleAddress} \n \n`);
    log("Deploying Time Based ...");
    await deployTimeBase(priceOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    log("Done \n \n");
  }
};

export default deployTimeBaseContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTimeBaseContract.tags = ["TimeBase"];
