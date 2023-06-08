import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  iParamsPerNetwork,
  eNetwork,
  ITokenAddress,
  IContractAddress,
  tEthereumAddress,
  LinkReference,
  Libraries,
} from "./types";
import { getDeployIds } from "./constants";
import { convertStringToBytes32, isLocalDevelopmentNetwork } from "./utilities/utils";
import { getAddress } from "ethers/lib/utils";
declare let hre: HardhatRuntimeEnvironment;

export const getParamPerNetwork = <T>(param: iParamsPerNetwork<T> | undefined, network: eNetwork): T | undefined => {
  if (!param) return undefined;
  return param[network];
};

const getDeployedConfig = async (networkName: string, prefix: string): Promise<ITokenAddress> => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);

  if (!isDevelopmentChain) {
    console.log("[NOTICE] Using tokens from configuration file");
    return {};
  } else {
    console.log(`[WARNING] Using deployed contracts instead of ${prefix} from configuration file`);

    const allDeployments = await hre.deployments.all();
    const deployedContracts = Object.keys(allDeployments).filter(key => key.includes(prefix));

    return deployedContracts.reduce<ITokenAddress>((acc, key) => {
      const symbol = key.replace(prefix, "");
      acc[symbol] = allDeployments[key].address;
      return acc;
    }, {});
  }
};

export const mapByte32IdToDataFeedsAddress = (
  dataFeedAddressConfig: IContractAddress,
  networkName: string,
): { ids: string[]; sources: string[] } => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);
  const ids: tEthereumAddress[] = [];
  const sources: tEthereumAddress[] = [];

  if (!isDevelopmentChain) {
    console.log("[NOTICE] Please confirm that these are your configuration");
    console.log("Supported DataFeed", dataFeedAddressConfig);
  }

  for (const key in dataFeedAddressConfig) {
    const bytes32Hash = convertStringToBytes32(key);
    console.log(`Key hash ${bytes32Hash} ${key}`);
    ids.push(bytes32Hash);
    sources.push(dataFeedAddressConfig[key]);
  }

  return { ids, sources };
};

export const mapTokenAddressToPriceFeeds = (
  tokenAndAddressConfig: IContractAddress,
  priceAggregatorConfig: IContractAddress,
  networkName: string,
  symbol = "USD",
): { assets: string[]; sources: string[] } => {
  const isDevelopmentChain = isLocalDevelopmentNetwork(networkName);
  const tokensAddress: tEthereumAddress[] = [];
  const priceFeedsAddress: tEthereumAddress[] = [];

  if (!isDevelopmentChain) {
    console.log("[NOTICE] Please confirm that these are your configurations");
    console.log("Supported Tokens", tokenAndAddressConfig);
    console.log("Price Aggregators", priceAggregatorConfig);
  }

  for (const key in tokenAndAddressConfig) {
    if (priceAggregatorConfig[`${key}${symbol}`] !== undefined) {
      tokensAddress.push(tokenAndAddressConfig[key]);
      priceFeedsAddress.push(priceAggregatorConfig[`${key}${symbol}`]);
    }
  }

  return { assets: tokensAddress, sources: priceFeedsAddress };
};

export const getSupportedTokens = async (networkName: string): Promise<ITokenAddress> => {
  const { TESTNET_TOKEN_PREFIX } = getDeployIds(networkName);
  return getDeployedConfig(networkName, TESTNET_TOKEN_PREFIX);
};

export const getChainlinkPriceOracles = async (networkName: string): Promise<ITokenAddress> => {
  const { TESTNET_PRICE_AGGR_PREFIX } = getDeployIds(networkName);
  return getDeployedConfig(networkName, TESTNET_PRICE_AGGR_PREFIX);
};

export const getSupportedDataFeeds = async (networkName: string): Promise<ITokenAddress> => {
  const { TESTNET_DATA_AGGR_PREFIX } = getDeployIds(networkName);
  return getDeployedConfig(networkName, TESTNET_DATA_AGGR_PREFIX);
};

export const linkLibraries = (
  { bytecode, linkReferences }: { bytecode: string; linkReferences: any },
  libraries: Libraries,
): string => {
  Object.keys(linkReferences).forEach(fileName => {
    Object.keys(linkReferences[fileName]).forEach(contractName => {
      if (!libraries.hasOwnProperty(contractName)) {
        throw new Error(`Missing link library name ${contractName}`);
      }
      const address = getAddress(libraries[contractName]).toLowerCase().slice(2);
      linkReferences[fileName][contractName].forEach(({ start, length }: LinkReference) => {
        const start2 = 2 + start * 2;
        const length2 = length * 2;
        bytecode = bytecode
          .slice(0, start2)
          .concat(address)
          .concat(bytecode.slice(start2 + length2, bytecode.length));
      });
    });
  });
  return bytecode;
};
