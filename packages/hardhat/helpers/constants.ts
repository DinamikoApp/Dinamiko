import { parseEther, parseUnits } from "ethers/lib/utils";

export const MOCK_CHAINLINK_AGGREGATORS_PRICES: { [key: string]: string } = {
  AAVE: parseUnits("300", 8).toString(),
  WETH: parseUnits("4000", 8).toString(),
  ETH: parseUnits("4000", 8).toString(),
  DAI: parseUnits("1", 8).toString(),
  USDC: parseUnits("1", 8).toString(),
  USDT: parseUnits("1", 8).toString(),
  WBTC: parseUnits("60000", 8).toString(),
  USD: parseUnits("1", 8).toString(),
  LINK: parseUnits("30", 8).toString(),
  CRV: parseUnits("6", 8).toString(),
  BAL: parseUnits("19.70", 8).toString(),
  REW: parseUnits("1", 8).toString(),
  EURS: parseUnits("1.126", 8).toString(),
  ONE: parseUnits("0.28", 8).toString(),
  WONE: parseUnits("0.28", 8).toString(),
  WAVAX: parseUnits("86.59", 8).toString(),
  WFTM: parseUnits("2.42", 8).toString(),
  WMATIC: parseUnits("1.40", 8).toString(),
  SUSD: parseUnits("1", 8).toString(),
  SUSHI: parseUnits("2.95", 8).toString(),
  GHST: parseUnits("2.95", 8).toString(),
  AGEUR: parseUnits("1.126", 8).toString(),
  JEUR: parseUnits("1.126", 8).toString(),
  DPI: parseUnits("149", 8).toString(),
};

export const ONE_ETH = parseEther("1");
export const TWO_ETH = parseEther("1");
export const THREE_ETH = parseEther("1");
export const FOUR_ETH = parseEther("1");
