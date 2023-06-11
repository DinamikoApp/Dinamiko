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

export interface PoolData {
  tickSpacing: number;
  fee: number;
  liquidity: number;
  sqrtPriceX96: any; // replace "any" with the actual type
  tick: any; // replace "any" with the actual type
}

export interface PoolContract {
  tickSpacing(): Promise<number>;
  fee(): Promise<number>;
  liquidity(): Promise<number>;
  slot0(): Promise<any[]>; // replace "any" with the actual type
}

export interface ChainNetworkConfigType {
  [key: string]: {
    name: string;
    supportedToken?: {
      [token: string]: string;
      USDT: string;
    };
    priceFeeds?: {
      [feed: string]: string;
    };
    dataFeeds?: {
      [feed: string]: string;
    };
    uniswap?: UniswapAddressNetworkConfigType;
    chainLink?: ChainLinkNetworkConfigType;
  };
}

export interface UniswapAddressNetworkConfigType {
  WETH_ADDRESS: string;
  FACTORY_ADDRESS: string;
  SWAP_ROUTER_ADDRESS: string;
  NFT_DESCRIPTOR_ADDRESS: string;
  POSITION_DESCRIPTOR_ADDRESS: string;
  POSITION_MANAGER_ADDRESS: string;
}

export interface ChainLinkNetworkConfigType {
  GET_uint256_JOB: string;
  ORACLE: string;
  KEEPER_UPDATE_INTERVAL: number;
  REGISTER: string;
  TRUFFLATION_ORACLE: string;
  TRUFFLATION_JOB_ID: string;
  TRUFFLATION_FEE: number;
  FEE: number;
}
