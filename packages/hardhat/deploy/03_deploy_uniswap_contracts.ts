import { utils } from "ethers";
import WETH9 from "../abis/WETH9.json";
import NFTDescriptorAbi from "@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json";
import UniswapV3Factory from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";
import SwapRouterAbi from "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json";
import NonfungiblePositionManager from "@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json";
import NonfungibleTokenPositionDescriptor from "@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json";

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName, isForkedNetwork, isLocalDevelopmentNetwork } from "../helpers/utilities/utils";
import { getSupportedTokens, linkLibraries } from "../helpers/deploy-config-helper";
import { deployByFactory } from "../helpers/utilities/tx";
// import { getDeployIds } from "../helpers/constants";
// import { getAToken } from "../helpers/contract-getters";
import { Token } from "../typechain-types";
// import { TokenInterface } from "../typechain-types/contracts/mocks/tokens/Token";

// import { getDeployIds } from "../helpers/constants";
// const bn = require("bignumber.js");
// const { promisify } = require("util");
// const fs = require("fs");
// bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const deployUniswap: DeployFunction = async function ({ deployments, ethers }: HardhatRuntimeEnvironment) {
  const { log } = deployments;

  const networkName = getNetworkName();
  // Should Only Deploy Mock If it Local Network
  const isForked = await isForkedNetwork();
  if (isLocalDevelopmentNetwork(networkName) && !isForked) {
    log("Local network detected! Deploying Uniswap Mock Tokens...");

    const weth = await deployByFactory("WETH", WETH9.abi, WETH9.bytecode);
    const uniswapFactory = await deployByFactory("UniswapV3Factory", UniswapV3Factory.abi, UniswapV3Factory.bytecode);
    const swapRouter = await deployByFactory("SwapRouter", SwapRouterAbi.abi, SwapRouterAbi.bytecode, [
      `${uniswapFactory.address}`,
      `${weth.address}`,
    ]);

    const nftDescriptor = await deployByFactory("NFTDescriptor", NFTDescriptorAbi.abi, NFTDescriptorAbi.bytecode);

    const artifactBytecode = NonfungibleTokenPositionDescriptor.bytecode;
    const linkRefs = {
      "NFTDescriptor.sol": {
        NFTDescriptor: [{ length: 20, start: 1681 }],
      },
    };
    const libraries = { NFTDescriptor: nftDescriptor.address };

    const linkedBytecode = linkLibraries({ bytecode: artifactBytecode, linkReferences: linkRefs }, libraries);
    const nativeCurrencyLabelBytes = utils.formatBytes32String("WETH");

    const nonfungibleTokenPositionDescriptor = await deployByFactory(
      "NonFungibleTokenPositionDescriptor",
      NonfungibleTokenPositionDescriptor.abi,
      linkedBytecode,
      [`${weth.address}`, nativeCurrencyLabelBytes],
    );

    const nonfungiblePositionManager = await deployByFactory(
      "NonfungiblePositionManager",
      NonfungiblePositionManager.abi,
      NonfungiblePositionManager.bytecode,
      [`${uniswapFactory.address}`, `${uniswapFactory.address}`, `${uniswapFactory.address}`],
    );

    const addresses = {
      WETH_ADDRESS: `${weth.address}`,
      FACTORY_ADDRESS: `${uniswapFactory.address}`,
      SWAP_ROUTER_ADDRESS: `${swapRouter.address}`,
      NFT_DESCRIPTOR_ADDRESS: `${nftDescriptor.address}`,
      POSITION_DESCRIPTOR_ADDRESS: `${nonfungibleTokenPositionDescriptor.address}`,
      POSITION_MANAGER_ADDRESS: `${nonfungiblePositionManager.address}`,
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

    // const FEE = 300;
    // const { WETH, DAI, USDC, USDT, WBTC, LINK, SUSHI, AAVE, CRV } = tokens;
    // const wethDai = await deployPool(
    //   nonfungiblePositionManager,
    //   uniswapFactory,
    //   WETH,
    //   DAI,
    //   FEE,
    //   encodePriceSqrt(1, 10),
    //   deployer,
    // );
    // console.log(wethDai);
  }
};

export default deployUniswap;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployUniswap.tags = ["Uniswap"];
