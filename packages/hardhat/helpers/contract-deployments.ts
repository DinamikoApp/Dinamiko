import {
  MockV3Aggregator,
  Token,
  LinkToken,
  DinamikoPriceOracle,
  DinamikoFeedOracle,
  SubscriptionAction,
  TradingVolumeBased,
  ERC20BalanceMonitor,
  PriceFeedBased,
  EthBalanceMonitor,
  InflationBased,
  DinamikoVolumeOracle,
  DinamikoVolumeOracleUpdater,
  TimeBase,
  DataFeedBased,
  DinamikoInflationOracle,
  DinamikoInflationOracleUpdater,
  TimeBasedFactory,
  DataFeedBasedFactory,
  TradingVolumeBasedFactory,
  InflationBasedFactory,
  PriceFeedBasedFactory,
} from "../typechain-types";
import { DEFAULT_REGISTRAR, ZERO_ADDRESS, getDeployIds, DEFAULT_UPDATE_INTERVAL } from "./constants";
import { deployContract } from "./utilities/tx";
import { getNetworkName } from "./utilities/utils";

export const deployMockV3Aggregator = async (symbol: string, value: string, testnet = true, id = "") => {
  const networkName = await getNetworkName();
  const { TESTNET_PRICE_AGGR_PREFIX } = getDeployIds(networkName);
  await deployContract<MockV3Aggregator>(
    "MockV3Aggregator",
    ["18", value],
    undefined,
    testnet ? `${TESTNET_PRICE_AGGR_PREFIX}${symbol}USD` : id,
  );
};

export const deployDataFeedAggregator = async (key: string, value: string, testnet = true, id = "") => {
  const networkName = await getNetworkName();
  const { TESTNET_DATA_AGGR_PREFIX } = getDeployIds(networkName);
  return await deployContract<MockV3Aggregator>(
    "MockV3Aggregator",
    ["8", value],
    undefined,
    testnet ? `${TESTNET_DATA_AGGR_PREFIX}-${key}` : id,
  );
};

export const deployMockToken = async (symbol: string, name: string, testnet = true, id = "") => {
  const networkName = await getNetworkName();
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(networkName);
  return await deployContract<Token>(
    "Token",
    [symbol, name],
    undefined,
    testnet ? `${TESTNET_TOKEN_PREFIX}${symbol}` : id,
  );
};

export const deployLinkToken = async () => {
  const networkName = await getNetworkName();
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(networkName);
  return await deployContract<LinkToken>("LinkToken", [], undefined, `${TESTNET_TOKEN_PREFIX}LINK`);
};

//DinamikoPriceOracle
export const deployDinamikoPriceOracle = async (assets: string[], sources: string[]) => {
  return await deployContract<DinamikoPriceOracle>("DinamikoPriceOracle", [
    assets,
    sources,
    ZERO_ADDRESS,
    ZERO_ADDRESS,
    "8",
  ]);
};

//DinamikoFeedOracle
export const deployDinamikoFeedsOracle = async (ids: string[], sources: string[]) => {
  return await deployContract<DinamikoFeedOracle>("DinamikoFeedOracle", [ids, sources, ZERO_ADDRESS]);
};

//DinamikoVolumeOracle
export const deployDinamikoVolumeOracle = async (link: string, linkOracle: string, jobId: string, symbol: string) => {
  return await deployContract<DinamikoVolumeOracle>("DinamikoVolumeOracle", [link, linkOracle, jobId, symbol]);
};

export const deployDinamikoVolumeOracleUpdater = async (
  Register: string,
  Interval: string,
  oracleAddress: string[],
) => {
  return await deployContract<DinamikoVolumeOracleUpdater>("DinamikoVolumeOracleUpdater", [
    Register,
    Interval,
    oracleAddress,
  ]);
};

// address oracleId_, string memory jobId_, uint256 fee_, address token_
//DinamikoVolumeOracle
export const deployDinamikoInflationOracle = async (
  chainLinkToken: string,
  oracle: string,
  jobId: string,
  fee: string,
) => {
  console.log(chainLinkToken, oracle, jobId, fee);
  return await deployContract<DinamikoInflationOracle>("DinamikoInflationOracle", [chainLinkToken, oracle, jobId, fee]);
};

export const deployDinamikoInflationOracleUpdater = async (
  Register: string,
  Interval: string,
  inflationOracle: string,
) => {
  return await deployContract<DinamikoInflationOracleUpdater>("DinamikoInflationOracleUpdater", [
    Register,
    Interval,
    inflationOracle,
  ]);
};

//SubscriptionAction
export const deploySubscriptionAction = async (ROUTER_ADDRESS: string, FACTORY_ADDRESS: string) => {
  return await deployContract<SubscriptionAction>("SubscriptionAction", [ROUTER_ADDRESS, FACTORY_ADDRESS]);
};

//DeployPriceFeedBased
export const deployPriceFeedBased = async (
  priceOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  console.log(
    `Oracle address: ${priceOracleAddress} Keeper registry: ${REGISTRAR} Update time interval: ${interval} Base currency: ${baseCurrency} address`,
  );
  return await deployContract<PriceFeedBased>("PriceFeedBased", [
    priceOracleAddress,
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

//InflationBased
export const deployInflationBased = async (
  inflationOracle: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  console.log(
    `Oracle address: ${inflationOracle} Keeper registry: ${DEFAULT_REGISTRAR} Update time interval: ${DEFAULT_UPDATE_INTERVAL.toString()} Base currency: ${baseCurrency} address`,
  );
  return await deployContract<InflationBased>("InflationBased", [inflationOracle, REGISTRAR, interval, baseCurrency]);
};

//DinamikoVolumeOracleUpdater

//TimeBase
export const deployTimeBase = async (
  priceOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  console.log(
    `Oracle address: ${priceOracleAddress} Keeper registry: ${REGISTRAR} Update time interval: ${interval.toString()} Base currency: ${baseCurrency} address`,
  );
  return await deployContract<TimeBase>("TimeBase", [priceOracleAddress, REGISTRAR, interval, baseCurrency]);
};

//TradingVolume
export const deployTradingVolumeBased = async (REGISTRAR: string, interval: string, baseCurrency: string) => {
  return await deployContract<TradingVolumeBased>("TradingVolumeBased", [REGISTRAR, interval, baseCurrency]);
};

//TradingVolume
export const deployDataFeedBased = async (
  feedOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  return await deployContract<DataFeedBased>("DataFeedBased", [feedOracleAddress, REGISTRAR, interval, baseCurrency]);
};

// DataFeedBased Factory
export const deployDataFeedBasedFactory = async (
  feedOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  return await deployContract<DataFeedBasedFactory>("DataFeedBasedFactory", [
    feedOracleAddress,
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

// InflationBased Factory
export const deployInflationBasedFactory = async (
  inflationOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  return await deployContract<InflationBasedFactory>("InflationBasedFactory", [
    inflationOracleAddress,
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

// TimeBased Factory
export const deployTimeBasedFactory = async (
  priceOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  return await deployContract<TimeBasedFactory>("TimeBasedFactory", [
    priceOracleAddress,
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

// PriceFeedBased Factory
export const deployPriceFeedBasedFactory = async (
  priceOracleAddress: string,
  REGISTRAR: string,
  interval: string,
  baseCurrency: string,
) => {
  return await deployContract<PriceFeedBasedFactory>("PriceFeedBasedFactory", [
    priceOracleAddress,
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

// TradingVolumeBased Factory
export const deployTradingVolumeBasedFactory = async (REGISTRAR: string, interval: string, baseCurrency: string) => {
  return await deployContract<TradingVolumeBasedFactory>("TradingVolumeBasedFactory", [
    REGISTRAR,
    interval,
    baseCurrency,
  ]);
};

export const deployEthBalanceMonitor = async (keeperRegistryAddress: string, minWaitPeriodSeconds: number) => {
  return await deployContract<EthBalanceMonitor>("EthBalanceMonitor", [
    keeperRegistryAddress,
    minWaitPeriodSeconds.toString(),
  ]);
};

export const deployERC20BalanceMonitor = async (
  erc20Token: string,
  keeperRegistryAddress: string,
  minWaitPeriodSeconds: number,
) => {
  return await deployContract<ERC20BalanceMonitor>("ERC20BalanceMonitor", [
    erc20Token,
    keeperRegistryAddress,
    minWaitPeriodSeconds.toString(),
  ]);
};
