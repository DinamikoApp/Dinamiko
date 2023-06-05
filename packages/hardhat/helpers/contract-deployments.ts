import { MockV3Aggregator, Token, LinkToken, DinamikoPriceOracle } from "../typechain-types";
import { ZERO_ADDRESS, getDeployIds } from "./constants";
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
