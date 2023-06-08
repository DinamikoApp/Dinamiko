import { utils } from "ethers";
import WETH9 from "../abis/WETH9.json";
import NFTDescriptorAbi from "@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json";
import UniswapV3FactoryAbi from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";
import SwapRouterAbi from "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json";
import NonfungiblePositionManagerAbi from "@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json";
import NonfungibleTokenPositionDescriptorAbi from "@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json";

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName, isForkedNetwork, isLocalDevelopmentNetwork } from "../helpers/utilities/utils";
import { getSupportedTokens, linkLibraries } from "../helpers/deploy-config-helper";
import { deployByFactory } from "../helpers/utilities/tx";

// import { getDeployIds } from "../helpers/constants";
// import { getAToken } from "../helpers/contract-getters";
import { Token } from "../typechain-types";
import {
  NFTDescriptor,
  NonfungiblePositionManager,
  NonfungibleTokenPositionDescriptor,
  SwapRouter,
} from "../typechain-types/deployFromAbi/v3-periphery";
import { UniswapV3Factory } from "../typechain-types/deployFromAbi/v3-core";

const deployUniswap: DeployFunction = async function ({ deployments, ethers }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const networkName = getNetworkName();
  // Should Only Deploy Mock If it Local Network
  const isForked = await isForkedNetwork();
  if (isLocalDevelopmentNetwork(networkName) && !isForked) {
    log("Local network detected! Deploying Uniswap Mock Tokens...");

    const weth = await deployByFactory("WETH", WETH9.abi, WETH9.bytecode);
    const uniswapFactory: UniswapV3Factory = await deployByFactory(
      "UniswapV3Factory",
      UniswapV3FactoryAbi.abi,
      UniswapV3FactoryAbi.bytecode,
    );
    const swapRouter: SwapRouter = await deployByFactory("SwapRouter", SwapRouterAbi.abi, SwapRouterAbi.bytecode, [
      `${uniswapFactory.address}`,
      `${weth.address}`,
    ]);

    const nftDescriptor: NFTDescriptor = await deployByFactory(
      "NFTDescriptor",
      NFTDescriptorAbi.abi,
      NFTDescriptorAbi.bytecode,
    );

    const nativeCurrencyLabelBytes = utils.formatBytes32String("WETH");

    const artifactBytecode = NonfungibleTokenPositionDescriptorAbi.bytecode;
    const linkRefs = {
      "NFTDescriptor.sol": {
        NFTDescriptor: [{ length: 20, start: 1681 }],
      },
    };
    const libraries = { NFTDescriptor: nftDescriptor.address };
    const linkedBytecode = linkLibraries({ bytecode: artifactBytecode, linkReferences: linkRefs }, libraries);

    const nonfungibleTokenPositionDescriptor: NonfungibleTokenPositionDescriptor = await deployByFactory(
      "NonFungibleTokenPositionDescriptor",
      NonfungibleTokenPositionDescriptorAbi.abi,
      linkedBytecode,
      [`${weth.address}`, nativeCurrencyLabelBytes],
    );

    const nftPositionManager: NonfungiblePositionManager = await deployByFactory(
      "NonfungiblePositionManager",
      NonfungiblePositionManagerAbi.abi,
      NonfungiblePositionManagerAbi.bytecode,
      [`${uniswapFactory.address}`, `${weth.address}`, `${nonfungibleTokenPositionDescriptor.address}`],
    );

    const addresses = {
      WETH_ADDRESS: `${weth.address}`,
      FACTORY_ADDRESS: `${uniswapFactory.address}`,
      SWAP_ROUTER_ADDRESS: `${swapRouter.address}`,
      NFT_DESCRIPTOR_ADDRESS: `${nftDescriptor.address}`,
      POSITION_DESCRIPTOR_ADDRESS: `${nonfungibleTokenPositionDescriptor.address}`,
      POSITION_MANAGER_ADDRESS: `${nftPositionManager.address}`,
    };

    console.log(addresses);
    const [deployer] = await ethers.getSigners();
    const tokens = await getSupportedTokens(networkName);
    console.log(tokens);

    // Gets Token to the deployer account
    let token: Token;
    for (const id in tokens) {
      if (id == "LINK") continue;
      const tokenFactory = await ethers.getContractFactory("Token");
      token = (await tokenFactory.connect(deployer).attach(tokens[id])) as Token;
      (await token["faucet(uint256)"](100000)).wait(2);
    }

    // Create Liquidity Pool
    const { DAI, USDT } = tokens;
    let erc20Address = [DAI, USDT];
    erc20Address = erc20Address.sort();
    const pairFee = 3000;
    await uniswapFactory.createPool(erc20Address[0], erc20Address[1], pairFee);
    const poolAddress: string = await uniswapFactory.getPool(erc20Address[0], erc20Address[1], pairFee);
    console.log(poolAddress, `Local Pool address ${erc20Address[0]} ${erc20Address[1]}`);
  }
};

export default deployUniswap;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployUniswap.tags = ["Uniswap"];
