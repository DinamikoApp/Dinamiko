import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployDinamikoVolumeOracle, deployDinamikoVolumeOracleUpdater } from "../helpers/contract-deployments";
import { getChainLinkKeys, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { DinamikoVolumeOracle } from "../typechain-types";

/**
 * Deploys a contract named "DinamikoVolumeOracle" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDinamikoVolumeOracleContract: DeployFunction = async function ({
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const LINK = tokens["LINK"];
  const keys = Object.keys(tokens);
  const chainLinkKeys = await getChainLinkKeys();

  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);

  log("Deploying Dinamiko Volume Oracle...");
  if (chainLinkKeys !== undefined) {
    const oracles = [];
    const { GET_uint256_JOB, ORACLE, KEEPER_UPDATE_INTERVAL, REGISTER } = chainLinkKeys;
    for (const symbol of keys) {
      console.log(`Token link address: ${LINK}`);
      console.log(`Job Id: ${GET_uint256_JOB}`);
      console.log(`Symbol: ${symbol}`);
      const deployedOracle: DinamikoVolumeOracle = await deployDinamikoVolumeOracle(
        LINK,
        ORACLE,
        GET_uint256_JOB,
        symbol,
      );
      oracles.push(deployedOracle.address);
    }
    await deployDinamikoVolumeOracleUpdater(REGISTER, KEEPER_UPDATE_INTERVAL.toString(), oracles);
  }

  log("Done \n \n");
};

export default deployDinamikoVolumeOracleContract;

deployDinamikoVolumeOracleContract.tags = ["DinamikoVolumeOracle"];
