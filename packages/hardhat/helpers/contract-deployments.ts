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
} from "../typechain-types";
import {
  FACTORYADDRESS,
  JOB_ID,
  REGISTRAR,
  ROUTERADDRESS,
  UPDATEINTERVAL,
  ZERO_ADDRESS,
  getDeployIds,
} from "./constants";
import { deployContract } from "./utilities/tx";
import { getNetworkName } from "./utilities/utils";

export const deployMockV3Aggregator = async (symbol: string, value: string, testnet = true, id = "") => {
  const { TESTNET_PRICE_AGGR_PREFIX } = getDeployIds(getNetworkName());
  await deployContract<MockV3Aggregator>(
    "MockV3Aggregator",
    ["18", value],
    undefined,
    testnet ? `${TESTNET_PRICE_AGGR_PREFIX}${symbol}USD` : id,
  );
};

export const deployDataFeedAggregator = async (key: string, value: string, testnet = true, id = "") => {
  const { TESTNET_DATA_AGGR_PREFIX } = getDeployIds(getNetworkName());
  await deployContract<MockV3Aggregator>(
    "MockV3Aggregator",
    ["8", value],
    undefined,
    testnet ? `${TESTNET_DATA_AGGR_PREFIX}-${key}` : id,
  );
};

export const deployMockToken = async (symbol: string, name: string, testnet = true, id = "") => {
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(getNetworkName());
  await deployContract<Token>("Token", [symbol, name], undefined, testnet ? `${TESTNET_TOKEN_PREFIX}${symbol}` : id);
};

export const deployLinkToken = async () => {
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(getNetworkName());
  await deployContract<LinkToken>("LinkToken", [], undefined, `${TESTNET_TOKEN_PREFIX}LINK`);
};

//DinamikoPriceOracle
export const deployDinamikoPriceOracle = async (assets: string[], sources: string[]) => {
  await deployContract<DinamikoPriceOracle>("DinamikoPriceOracle", [assets, sources, ZERO_ADDRESS, ZERO_ADDRESS, "8"]);
};

//DinamikoFeedOracle
export const deployDinamikoFeedsOracle = async (ids: string[], sources: string[]) => {
  await deployContract<DinamikoFeedOracle>("DinamikoFeedOracle", [ids, sources, ZERO_ADDRESS]);
};

//DeployPriceFeedBased
export const deployPriceFeedBased = async (
  oracleAddress: string,
  FEE: number,
  oracleId: string,
  link: string,
  baseCurrency: string,
) => {
  await deployContract<PriceFeedBased>("PriceFeedBased", [
    oracleAddress,
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseCurrency,
  ]);
};

//InflationBased
export const deployInflationBased = async (FEE: number, oracleId: string, link: string, baseCurrency: string) => {
  await deployContract<InflationBased>("InflationBased", [
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseCurrency,
  ]);
};

//SubscriptionAction
export const deploySubscriptionAction = async () => {
  await deployContract<SubscriptionAction>("SubscriptionAction", [ROUTERADDRESS, FACTORYADDRESS]);
};

//DinamikoVolumeOracle
export const deployDinamikoVolumeOracle = async (link: string, linkOracle: string, jobId: string, symbol: string) => {
  await deployContract<DinamikoVolumeOracle>("DinamikoVolumeOracle", [link, linkOracle, jobId, symbol]);
};

//DinamikoVolumeOracleUpdater
export const deployDinamikoVolumeOracleUpdater = async (
  oracleAddress: string,
  FEE: number,
  oracleId: string,
  link: string,
  baseCurrency: string,
  volumeOracle: string,
) => {
  await deployContract<DinamikoVolumeOracleUpdater>("DinamikoVolumeOracleUpdater", [
    oracleAddress,
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseCurrency,
    volumeOracle,
  ]);
};

//TimeBase
export const deployTimeBase = async (
  oracleAddress: string,
  FEE: number,
  oracleId: string,
  link: string,
  baseToken: string,
) => {
  await deployContract<TimeBase>("TimeBase", [
    oracleAddress,
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseToken,
  ]);
};

//TradingVolume
export const deployTradingVolumeBased = async (FEE: number, oracleId: string, link: string, baseToken: string) => {
  await deployContract<TradingVolumeBased>("TradingVolumeBased", [
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseToken,
  ]);
};

export const deployERC20BalanceMonitor = async (
  erc20TokenAddress: string,
  keeperRegistryAddress: string,
  minWaitPeriodSeconds: number,
) => {
  await deployContract<ERC20BalanceMonitor>("ERC20BalanceMonitor", [
    erc20TokenAddress,
    keeperRegistryAddress,
    minWaitPeriodSeconds.toString(),
  ]);
};

export const deployEthBalanceMonitor = async (keeperRegistryAddress: string, minWaitPeriodSeconds: number) => {
  await deployContract<EthBalanceMonitor>("EthBalanceMonitor", [
    keeperRegistryAddress,
    minWaitPeriodSeconds.toString(),
  ]);
};

//TradingVolume
export const deployDataFeedBased = async (
  oracleAddress: string,
  FEE: number,
  oracleId: string,
  link: string,
  baseCurrency: string,
) => {
  await deployContract<DataFeedBased>("DataFeedBased", [
    oracleAddress,
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    baseCurrency,
  ]);
};
