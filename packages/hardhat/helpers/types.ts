export type tEthereumAddress = string;
export interface ITokenAddress {
  [token: string]: tEthereumAddress;
}

export interface IContractAddress {
  [token: string]: tEthereumAddress;
}
export type eNetwork =
  | eEthereumNetwork
  | ePolygonNetwork
  | eXDaiNetwork
  | eAvalancheNetwork
  | eArbitrumNetwork
  | eHarmonyNetwork
  | eFantomNetwork
  | eOptimismNetwork
  | eTenderlyNetwork;

type eTenderlyNetwork = "tenderly";

export enum eFantomNetwork {
  main = "fantom",
  testnet = "fantom-testnet",
}

export enum eOptimismNetwork {
  main = "optimism",
  testnet = "optimism-testnet",
}

export enum eEthereumNetwork {
  buidlerevm = "buidlerevm",
  kovan = "kovan",
  ropsten = "ropsten",
  main = "main",
  coverage = "coverage",
  hardhat = "hardhat",
  tenderly = "tenderly",
  rinkeby = "rinkeby",
  goerli = "goerli",
  sepolia = "sepolia",
}

export enum ePolygonNetwork {
  polygon = "polygon",
  mumbai = "mumbai",
}

export enum eXDaiNetwork {
  xdai = "xdai",
}

export enum eAvalancheNetwork {
  avalanche = "avalanche",
  fuji = "fuji",
}

export enum eArbitrumNetwork {
  arbitrum = "arbitrum",
  arbitrumTestnet = "arbitrum-testnet",
  goerliNitro = "arbitrum-goerli",
}

export enum eHarmonyNetwork {
  main = "harmony",
  testnet = "harmony-testnet",
}

export enum EthereumNetworkNames {
  kovan = "kovan",
  ropsten = "ropsten",
  main = "main",
  matic = "matic",
  mumbai = "mumbai",
  xdai = "xdai",
  avalanche = "avalanche",
  fuji = "fuji",
}

export type iParamsPerNetwork<T> = {
  [k in eNetwork]?: T;
};

export interface Artifacts {
  [key: string]: any;
}

export interface LinkReference {
  length: number;
  start: number;
}

export interface Libraries {
  [key: string]: string;
}
