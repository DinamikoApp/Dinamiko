import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployDinamikoInflationOracle, deployDinamikoInflationOracleUpdater } from "../helpers/contract-deployments";
import { getChainLinkKeys, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { DinamikoInflationOracle } from "../typechain-types";

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
  const chainLinkKeys = await getChainLinkKeys();

  ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR);

  log("Deploying Dinamiko Inflation Oracle...");
  if (chainLinkKeys !== undefined) {
    const { TRUFFLATION_JOB_ID, TRUFFLATION_ORACLE, REGISTER, TRUFFLATION_FEE, KEEPER_UPDATE_INTERVAL } = chainLinkKeys;
    const deployedInflationOracle: DinamikoInflationOracle = await deployDinamikoInflationOracle(
      LINK,
      TRUFFLATION_ORACLE,
      TRUFFLATION_JOB_ID,
      TRUFFLATION_FEE.toString(),
    );

    await deployDinamikoInflationOracleUpdater(
      REGISTER,
      KEEPER_UPDATE_INTERVAL.toString(),
      deployedInflationOracle.address,
    );
  }

  log("Done \n \n");
};

export default deployDinamikoVolumeOracleContract;

deployDinamikoVolumeOracleContract.tags = ["DinamikoVolumeOracle"];
