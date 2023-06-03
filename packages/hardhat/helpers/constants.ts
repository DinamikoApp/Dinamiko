import { parseEther, parseUnits } from "ethers/lib/utils";

export const MOCK_TOKEN_LIST: { [symbol: string]: string } = {
  WETH: "Wrapped Ether",
  ETH: "Ether",
  DAI: "Dai Stablecoin",
  USDC: "USD Coin",
  USDT: "USDT",
  WBTC: "Wrapped BTC",
  LINK: "ChainLink Token",
  SUSHI: "SushiToken",
  AAVE: "Aave Token",
  CRV: "Curve DAO Token",
};

export const MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES: { [key: string]: string } = {
  WETH: parseUnits("2000", 8).toString(),
  ETH: parseUnits("2000", 8).toString(),
  DAI: parseUnits("1", 8).toString(),
  USDC: parseUnits("1", 8).toString(),
  USDT: parseUnits("1", 8).toString(),
  WBTC: parseUnits("29000", 8).toString(),
  LINK: parseUnits("30", 8).toString(),
  SUSHI: parseUnits("2.95", 8).toString(),
  AAVE: parseUnits("300", 8).toString(),
  CRV: parseUnits("6", 8).toString(),
  USD: parseUnits("1", 8).toString(),
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";

export const ONE_ETH = parseEther("1");
export const TWO_ETH = parseEther("1");
export const THREE_ETH = parseEther("1");
export const FOUR_ETH = parseEther("1");

export const PERCENTAGE_FACTOR = "10000";
export const HALF_PERCENTAGE = "5000";

export const DEFAULT_NAMED_ACCOUNTS = {
  deployer: {
    default: 0,
  },
  admin: {
    default: 0,
  },
};
