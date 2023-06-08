import { Contract, ContractTransaction, ContractFactory } from "ethers";
import { tEthereumAddress, PoolData } from "../types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Libraries } from "hardhat-deploy/types";
import crypto from "crypto";
import path from "path";
import fs from "fs/promises";
import { appendJsonToFile } from "./utils";
import { ethers } from "hardhat";

declare let hre: HardhatRuntimeEnvironment;

export const waitForTx = async (tx: ContractTransaction) => await tx.wait(1);

export const getCurrentBlock = async () => {
  return (await hre.ethers.provider.getBlock("latest")).number;
};

export const evmSnapshot = async () => await hre.ethers.provider.send("evm_snapshot", []);

export const evmRevert = async (id: string) => hre.ethers.provider.send("evm_revert", [id]);

export const advanceBlock = async (timestamp: number) => await hre.ethers.provider.send("evm_mine", [timestamp]);

export const increaseTime = async (secondsToIncrease: number) => {
  await hre.ethers.provider.send("evm_increaseTime", [secondsToIncrease]);
  await hre.ethers.provider.send("evm_mine", []);
};

// Workaround for time travel tests bug: https://github.com/Tonyhaenn/hh-time-travel/blob/0161d993065a0b7585ec5a043af2eb4b654498b8/test/test.js#L12
export const advanceTimeAndBlock = async function (forwardTime: number) {
  const currentBlockNumber = await getCurrentBlock();
  const currentBlock = await hre.ethers.provider.getBlock(currentBlockNumber);

  if (currentBlock === null) {
    /* Workaround for https://github.com/nomiclabs/hardhat/issues/1183
     */
    await hre.ethers.provider.send("evm_increaseTime", [forwardTime]);
    await hre.ethers.provider.send("evm_mine", []);
    //Set the next blocktime back to 15 seconds
    await hre.ethers.provider.send("evm_increaseTime", [15]);
    return;
  }
  const currentTime = currentBlock.timestamp;
  const futureTime = currentTime + forwardTime;
  await hre.ethers.provider.send("evm_setNextBlockTimestamp", [futureTime]);
  await hre.ethers.provider.send("evm_mine", []);
};

export const waitDeployment = async <ContractType extends Contract>(instance: ContractType): Promise<ContractType> => {
  await waitForTx(instance.deployTransaction);
  return instance;
};

export const getBlockTimestamp = async (blockNumber?: number): Promise<number> => {
  if (!blockNumber) {
    const block = await hre.ethers.provider.getBlock("latest");
    if (!block) {
      throw `getBlockTimestamp: missing block number ${blockNumber}`;
    }
    return block.timestamp;
  }
  const block = await hre.ethers.provider.getBlock(blockNumber);
  if (!block) {
    throw `getBlockTimestamp: missing block number ${blockNumber}`;
  }
  return block.timestamp;
};

export const deployByFactory = async <ContractType extends Contract>(
  name: string,
  abi: any[],
  bytecode: string,
  args: any[] = [],
): Promise<ContractType> => {
  const [from] = await ethers.getSigners();

  const contractFactory: ContractFactory = await hre.ethers.getContractFactory(abi, bytecode, from);
  const deployedContract = await contractFactory.deploy(...args);
  const deployedInstance = await deployedContract.deployed();
  const { address } = deployedInstance;
  await appendJsonToFile("./temp/", {
    [name]: { address, abi },
  });
  console.log(`Deployed ${name} ...:  deployed at ${address}`);
  return deployedInstance as any as ContractType;
};

export const deployContract = async <ContractType extends Contract>(
  contract: string,
  args?: (string | string[])[],
  libraries?: Libraries | undefined,
  id?: string,
): Promise<ContractType> => {
  const { deployer: from } = await hre.getNamedAccounts();

  const artifact = await hre.deployments.deploy(
    id || `${contract}-${crypto.randomUUID()}`, // Prevent collisions with principal deployment in tests environment
    {
      contract,
      args,
      from,
      libraries,
      log: true,
    },
  );
  return hre.ethers.getContractAt(artifact.abi, artifact.address) as any as ContractType;
};

export const getContract = async <ContractType extends Contract>(
  id: string,
  address?: tEthereumAddress,
): Promise<ContractType> => {
  const artifact = await hre.deployments.getArtifact(id);
  return hre.ethers.getContractAt(
    artifact.abi,
    address || (await (await hre.deployments.get(id)).address),
  ) as any as ContractType;
};

export const getAddressFromJson = async (network: string, id: string) => {
  const artifactPath = path.join(__dirname, "../../deployments", network, `${id}.json`);
  const artifact = await fs.readFile(artifactPath, "utf8");
  const artifactJson = JSON.parse(artifact);

  if (artifactJson.address) {
    return artifactJson.address;
  }
  throw `Missing artifact at ${artifactPath}`;
};

export async function getPoolData(poolContract: Contract): Promise<PoolData> {
  const [tickSpacing, fee, liquidity, slot0] = await Promise.all([
    poolContract.tickSpacing(),
    poolContract.fee(),
    poolContract.liquidity(),
    poolContract.slot0(),
  ]);

  return {
    tickSpacing: tickSpacing,
    fee: fee,
    liquidity: liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  };
}
