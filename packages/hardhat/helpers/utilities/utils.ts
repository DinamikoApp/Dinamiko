import { ZERO_ADDRESS } from "../constants";
import { getAddress, isAddress } from "ethers/lib/utils";
import { tEthereumAddress } from "../types";

export const isValidAddress = (value: tEthereumAddress): boolean =>
  !!value && isAddress(value) && getAddress(value) !== getAddress(ZERO_ADDRESS);

export const isEqualAddress = (a: tEthereumAddress, b: tEthereumAddress) => getAddress(a) === getAddress(b);

export const isLocalDevelopmentNetwork = (chainId: number | undefined) => chainId == 31337 || chainId == undefined;
