import { SupportedTokens } from "./types/types";

export const SUPPORTED_TOKENS: SupportedTokens = {
  WETH: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  DAI: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  USDC: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  USDT: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  WBTC: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  LINK: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  SUSHI: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
  AAVE: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  CRV: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
};

export const ZERO_ADDRESS = (0x0000000000000000000000000000000000000000).toString();

export function getAddressByKey(key: string): string {
  return SUPPORTED_TOKENS[key] || ZERO_ADDRESS;
}

export const SUPPORTED_LIQUIDITY_POOLS = {
  "WETH/DAI": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  "DAI/USDC": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  "USDC/USDT": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  "USDT/WETH": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  "WBTC/USDT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
};

export const INFLATION_ORACLE = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const TRADING_VOLUME = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const SUPPORTED_TYPE = ["Buy", "Sell", "Add Liquidity"];

export const SUPPORTED_ACTIONS = [
  {
    id: 0,
    title: "Time based",
    imageSrc: "/assets/img/3d-hourglass.svg",
  },
  {
    id: 1,
    title: "Inflation rate",
    imageSrc: "/assets/img/inflation.svg",
  },
  {
    id: 2,
    title: "Asset price",
    imageSrc: "/assets/img/3d-sold.svg",
  },
  {
    id: 3,
    title: "Trending volume",
    imageSrc: "/assets/img/trending.svg",
  },
];
