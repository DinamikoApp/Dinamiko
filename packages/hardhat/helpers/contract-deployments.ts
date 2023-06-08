import {
  MockV3Aggregator,
  Token,
  LinkToken,
  DinamikoPriceOracle,
  DinamikoFeedOracle,
  PriceBasedSubscriptions,
  InflationRateBased,
  SubscriptionAction,
} from "../typechain-types";
import { FACTORYADDRESS, ROUTERADDRESS, ZERO_ADDRESS, getDeployIds } from "./constants";
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
  registrar: string,
  //UPDATEINTERVAL: number,
  transactionsAddress: string,
  _usdtAddress: string,
) => {
  await deployContract<PriceBasedSubscriptions>("PriceBasedSubscriptions", [
    oracleAddress,
    link,
    registrar,
    //UPDATEINTERVAL.toString(),
    transactionsAddress,
    _usdtAddress,
  ]);
};

export const deployInflationRateBased = async (
  FEE: number,
  JOB_ID: string,
  _oracleId: string,
  link: string,
  REGISTRAR: string,
  UPDATEINTERVAL: number,
  transactionsAddress: string,
  _usdtAddress: string,
) => {
  await deployContract<InflationRateBased>("InflationRateBased", [
    FEE.toString(),
    JOB_ID,
    _oracleId,
    link,
    REGISTRAR,
    UPDATEINTERVAL.toString(),
    transactionsAddress,
    _usdtAddress,
  ]);
};

// export const deploySubscriptionAction = async (_routerAddress: string, _factoryAddress: string) => {
//   await deployContract<SubscriptionAction>("SubscriptionAction", [_routerAddress, _factoryAddress]);
// };

export const deploySubscriptionAction = async () => {
  await deployContract<SubscriptionAction>("SubscriptionAction", [ROUTERADDRESS, FACTORYADDRESS]);
};
