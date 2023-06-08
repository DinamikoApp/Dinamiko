import {
  MockV3Aggregator,
  Token,
  LinkToken,
  DinamikoPriceOracle,
  DinamikoFeedOracle,
  InflationRateBased,
  SubscriptionAction,
  VolumeOracle,
  RateBasedSubscriptions,
  TimeBasedSubscriptions,
  TradingVolumeBased,
  ERC20BalanceMonitor,
  EthBalanceMonitor,
} from "../typechain-types";
import { PriceBasedSubscriptions } from "../typechain-types/contracts/PriceFeedBased.sol";
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

export const deployDinamikoPriceOracle = async (assets: string[], sources: string[]) => {
  await deployContract<DinamikoPriceOracle>("DinamikoPriceOracle", [assets, sources, ZERO_ADDRESS, ZERO_ADDRESS, "8"]);
};

export const deployDinamikoFeedsOracle = async (ids: string[], sources: string[]) => {
  await deployContract<DinamikoFeedOracle>("DinamikoFeedOracle", [ids, sources, ZERO_ADDRESS]);
};

export const deployPriceBasedSubscriptions = async (
  oracleAddress: string,
  link: string,
  transactionsAddress: string,
  usdtAddress: string,
) => {
  await deployContract<PriceBasedSubscriptions>("PriceBasedSubscriptions", [
    oracleAddress,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
    usdtAddress,
  ]);
};

export const deployInflationRateBased = async (
  FEE: number,
  oracleId: string,
  link: string,
  transactionsAddress: string,
  usdtAddress: string,
) => {
  await deployContract<InflationRateBased>("InflationRateBased", [
    FEE.toString(),
    JOB_ID,
    oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
    usdtAddress,
  ]);
};

export const deploySubscriptionAction = async () => {
  await deployContract<SubscriptionAction>("SubscriptionAction", [ROUTERADDRESS, FACTORYADDRESS]);
};

export const deployVolumeOracle = async (link: string, linkOracle: string) => {
  await deployContract<VolumeOracle>("VolumeOracle", [link, linkOracle, JOB_ID]);
};

export const deployRateBasedSubscriptions = async (
  oracleAddress: string,
  link: string,
  registrar: string,
  transactionsAddress: string,
  usdtAddress: string,
) => {
  await deployContract<RateBasedSubscriptions>("RateBasedSubscriptions", [
    oracleAddress,
    link,
    registrar,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
    usdtAddress,
  ]);
};

export const deployTimeBasedSubscriptions = async (link: string, transactionsAddress: string, usdtAddress: string) => {
  await deployContract<TimeBasedSubscriptions>("TimeBasedSubscriptions", [
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
    usdtAddress,
  ]);
};

export const deployTradingVolumeBased = async (link: string, transactionsAddress: string) => {
  await deployContract<TradingVolumeBased>("TradingVolumeBased", [
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
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
