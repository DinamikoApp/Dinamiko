import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {
  deployTimeBasedFactory,
  deployInflationBasedFactory,
  deployDataFeedBasedFactory,
  deployTradingVolumeBasedFactory,
  deployPriceFeedBasedFactory,
} from "../helpers/contract-deployments";
import { getChainLinkKeys, getDeployedConfig, getSupportedTokens } from "../helpers/deploy-config-helper";
import { getNetworkName } from "../helpers/utilities/utils";
import { FEED_ORACLE, INFLATION_ORACLE, PRICE_ORACLE } from "../helpers/constants";
/**
 * Deploys a contract named "DinamikoVolumeOracle" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySubscriptionFactoryContract: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  const chainlinkKeys = await getChainLinkKeys();
  const networkName = await getNetworkName();
  const tokens = await getSupportedTokens(networkName);
  const USDT = tokens["USDT"];

  if (chainlinkKeys != undefined) {
    const { REGISTER, KEEPER_UPDATE_INTERVAL } = chainlinkKeys;
    const priceFeedOracle = await await getDeployedConfig(networkName, PRICE_ORACLE);
    const inflationFeedOracle = await await getDeployedConfig(networkName, INFLATION_ORACLE);
    const dataFeedOracle = await getDeployedConfig(networkName, FEED_ORACLE);
    const dataFeedOracleAddress = Object.values(dataFeedOracle)[0];
    const priceFeedOracleAddress = Object.values(priceFeedOracle)[0];
    const inflationOracleAddress = Object.values(inflationFeedOracle)[0];

    console.log(`\n`);
    console.log(`Data Feed At at ${dataFeedOracleAddress}`);
    console.log(`Price Feed At at ${priceFeedOracleAddress}`);
    console.log(`Inflation Feed At at ${inflationOracleAddress}`);
    console.log(`\n`);

    log("Deploying Subscription Factory...");
    await deployDataFeedBasedFactory(dataFeedOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    await deployPriceFeedBasedFactory(priceFeedOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    await deployTradingVolumeBasedFactory(REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    await deployInflationBasedFactory(inflationOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);
    await deployTimeBasedFactory(priceFeedOracleAddress, REGISTER, KEEPER_UPDATE_INTERVAL.toString(), USDT);

    log("Done \n \n");
  }
};

export default deploySubscriptionFactoryContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deploySubscriptionFactoryContract.tags = ["SubscriptionFactory"];
