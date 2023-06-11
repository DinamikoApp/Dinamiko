import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployInflationBased } from "../helpers/contract-deployments";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { INFLATION_ORACLE } from "../helpers/constants";
/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployInflationBasedContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const inflationOracle = await getDeployedConfig(networkName, INFLATION_ORACLE);
    const inflationOracleAddress = Object.values(inflationOracle)[0];
    console.log(`\n \n InflationOracle at ${inflationOracleAddress} \n \n`);
    log("Deploying Price Feed Based ...");
    await deployInflationBased(inflationOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    log("Done \n \n");
  }
};

export default deployInflationBasedContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployInflationBasedContract.tags = ["InflationBased"];
