import { MockV3Aggregator, Token, LinkToken } from "../typechain-types";
import { deployContract } from "./utilities/tx";

export const deployMockV3Aggregator = async (symbol: string, value: string, usdPriceFeed = true, id = "") =>
  await deployContract<MockV3Aggregator>(
    "MockV3Aggregator",
    ["18", value],
    undefined,
    usdPriceFeed ? `${symbol}/USD-PriceFeedAggregator` : id,
  );

export const deployMockToken = async (symbol: string, name: string) =>
  await deployContract<Token>("Token", [symbol, name], undefined, symbol);

export const deployLinkToken = async () => await deployContract<LinkToken>("LinkToken", [], undefined, "Link");
