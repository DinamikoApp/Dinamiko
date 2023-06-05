import { HardhatRuntimeEnvironment } from "hardhat/types";
import { iParamsPerNetwork, eNetwork, ITokenAddress, IContractAddress, tEthereumAddress } from "./types";
import { getDeployIds } from "./constants";
import { isLocalDevelopmentNetwork } from "./utilities/utils";
declare let hre: HardhatRuntimeEnvironment;

export const getParamPerNetwork = <T>(param: iParamsPerNetwork<T> | undefined, network: eNetwork): T | undefined => {
  if (!param) return undefined;

  return param[network];
};

export const mapTokenAddressToPriceFeeds = (
  tokenAndAddressConfig: IContractAddress,
  priceAggregatorConfig: IContractAddress,
  networkName: string,
  symbol = "USD",
): {
  assets: string[];
  sources: string[];
} => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);
  const tokensAddress: tEthereumAddress[] = [];
  const priceFeedsAddress: tEthereumAddress[] = [];

  if (!isDevelopmentChain) {
    console.log("[NOTICE] Please confirm that  this are your configuration file");
    console.log("Supported Tokens ", tokenAndAddressConfig);
    console.log("Price Aggregators ", priceAggregatorConfig);
  }

  for (const key in tokenAndAddressConfig) {
    if (priceAggregatorConfig[`${key}${symbol}`] !== undefined) {
      tokensAddress.push(tokenAndAddressConfig[key]);
      priceFeedsAddress.push(priceAggregatorConfig[`${key}${symbol}`]);
    }
  }
  return { assets: tokensAddress, sources: priceFeedsAddress };
};

export const getSupportedTokens = async (networkName: string) => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(networkName);
  if (!isDevelopmentChain) {
    console.log("[NOTICE] Using tokens from configuration file");

    // return getParamPerNetwork<ITokenAddress>(poolConfig.ChainlinkAggregator, network) || {};
  }
  console.log("[WARNING] Using deployed Tokens instead tokens from config file from configuration file");

  const allDeployments = await hre.deployments.all();
  const testnetKeys = Object.keys(allDeployments).filter(key => key.includes(TESTNET_TOKEN_PREFIX));
  return testnetKeys.reduce<ITokenAddress>((acc, key) => {
    const symbol = key.replace(TESTNET_TOKEN_PREFIX, "");
    acc[symbol] = allDeployments[key].address;
    return acc;
  }, {});
};

export const getChainlinkOracles = async (networkName: string) => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);
  const { TESTNET_PRICE_AGGR_PREFIX } = getDeployIds(networkName);
  if (!isDevelopmentChain) {
    console.log("[NOTICE] Using ChainlinkAggregator from configuration file");

    // return getParamPerNetwork<ITokenAddress>(poolConfig.ChainlinkAggregator, network) || {};
  }
  console.log("[WARNING] Using deployed Mock Price Aggregators instead of ChainlinkAggregator from configuration file");

  const allDeployments = await hre.deployments.all();
  const testnetKeys = Object.keys(allDeployments).filter(key => key.includes(TESTNET_PRICE_AGGR_PREFIX));
  return testnetKeys.reduce<ITokenAddress>((acc, key) => {
    const symbol = key.replace(TESTNET_PRICE_AGGR_PREFIX, "");
    acc[symbol] = allDeployments[key].address;
    return acc;
  }, {});
};
