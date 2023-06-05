import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName } from "../helpers/utilities/utils";
import { deployDinamikoPriceOracle } from "../helpers/contract-deployments";
import { getChainlinkOracles, getSupportedTokens, mapTokenAddressToPriceFeeds } from "../helpers/deploy-config-helper";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDinamikoPriceOracleContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const networkName = getNetworkName();
  const supportedTokens = await getSupportedTokens(networkName);
  const supportedTokensPriceFeeds = await getChainlinkOracles(networkName);
  const { assets, sources } = mapTokenAddressToPriceFeeds(supportedTokens, supportedTokensPriceFeeds, networkName);

  log("Deploying Oracle Tokens...");
  await deployDinamikoPriceOracle(assets, sources);
  // // Should Only Deploy Mock If it Local Network
};

export default deployDinamikoPriceOracleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployDinamikoPriceOracleContract.tags = ["DinamikoPriceOracle"];
