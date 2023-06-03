import { MockAggregator, Token } from "../typechain";
import { deployContract } from "./utilities/tx";

export const deployMockAggregator = async (price: string) =>
  await deployContract<MockAggregator>("MockAggregator", [price]);

export const deployMockToken = async (name: string, symbol: string) =>
  await deployContract<Token>("Token", [name, symbol]);
