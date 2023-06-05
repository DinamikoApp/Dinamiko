import { ZERO_ADDRESS } from "../constants";
import { getAddress, isAddress } from "ethers/lib/utils";
import { tEthereumAddress } from "../types";
import hre from "hardhat";

export const isValidAddress = (value: tEthereumAddress): boolean =>
  !!value && isAddress(value) && getAddress(value) !== getAddress(ZERO_ADDRESS);

export const isEqualAddress = (a: tEthereumAddress, b: tEthereumAddress) => getAddress(a) === getAddress(b);

export const isLocalDevelopmentNetwork = (networkName: string) =>
  networkName == "LOCALHOST" || networkName == "HARDHAT";

export const getNetworkName = () => hre.network.name.toUpperCase();
export const getChainId = () => hre.network.config.chainId;
