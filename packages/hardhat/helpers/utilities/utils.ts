import { ZERO_ADDRESS } from "../constants";
import { getAddress, isAddress, formatBytes32String } from "ethers/lib/utils";
import { tEthereumAddress } from "../types";
import hre from "hardhat";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { BigNumber } from "ethers";
import bn from "bignumber.js";

export const isValidAddress = (value: tEthereumAddress): boolean =>
  !!value && isAddress(value) && getAddress(value) !== getAddress(ZERO_ADDRESS);

export const isEqualAddress = (a: tEthereumAddress, b: tEthereumAddress) => getAddress(a) === getAddress(b);

export const isLocalDevelopmentNetwork = (networkName: string) =>
  networkName == "LOCALHOST" || networkName == "HARDHAT";

export const getNetworkName = () => hre.network.name.toUpperCase();

export const getChainId = () => hre.network.config.chainId;

export const convertStringToBytes32 = (text: string) => formatBytes32String(text);

export const isForkedNetwork = async () => (await hre.ethers.provider.getBlock("latest")).number > 100000;

export const appendJsonToFile = async (TARGET_DIR: string, data: any): Promise<void> => {
  try {
    // Read the existing JSON file
    if (!existsSync(TARGET_DIR)) {
      mkdirSync(TARGET_DIR);
    }
    const filePath = `${TARGET_DIR}/factory_deployed.json`;

    if (!existsSync(filePath)) {
      writeFileSync(filePath, "{}");
    }

    const fileData = readFileSync(filePath, "utf8");
    // Parse the existing JSON data
    const existingJsonData: any = JSON.parse(fileData);

    // // Concatenate the new JSON data
    const updatedJsonData = {
      ...existingJsonData,
      ...data,
    };

    await writeFileSync(filePath, JSON.stringify(updatedJsonData));

    console.log("Successfully written to file");
  } catch (err) {
    console.error(`Error while updating factory files file: ${err}`);
  }
};

export const encodePriceSqrt = (reserve1: number | string, reserve0: number | string): BigNumber => {
  bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString(),
  );
};
