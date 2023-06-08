import { Token } from "../typechain-types";
import { tEthereumAddress } from "./types";
// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { Libraries } from "hardhat-deploy/dist/types";
import { getContract } from "./utilities/tx";
import { getNetworkName, isForkedNetwork, isLocalDevelopmentNetwork } from "./utilities/utils";
// Prevent error HH9 when importing this file inside tasks or helpers at Hardhat config load
// declare let hre: HardhatRuntimeEnvironment;

export const getAToken = async (name: string, address: tEthereumAddress): Promise<Token> => {
  const networkName = getNetworkName();
  const isForked = await isForkedNetwork();
  if (isLocalDevelopmentNetwork(networkName) && !isForked) {
    return getContract(`Token`, address);
  } else {
    return getContract(name, address);
  }
};

// export const getOwnableContract = async (address: string) => {
//   const ownableInterface = new hre.ethers.utils.Interface([
//     "function owner() public view returns (address)",
//     "function transferOwnership(address newOwner) public",
//     "function renounceOwnership() public",
//   ]);

//   return new hre.ethers.Contract(address, ownableInterface, await getFirstSigner());
// };
