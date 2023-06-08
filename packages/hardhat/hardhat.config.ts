import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import { DEFAULT_NAMED_ACCOUNTS } from "./helpers/constants";
import {
  eArbitrumNetwork,
  eAvalancheNetwork,
  eEthereumNetwork,
  eFantomNetwork,
  eHarmonyNetwork,
  eOptimismNetwork,
  ePolygonNetwork,
} from "./helpers/types";

import { ETHERSCAN_KEY, getCommonNetworkConfig, hardhatNetworkSettings } from "./helpers/helper-hardhat-config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.6",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    ...DEFAULT_NAMED_ACCOUNTS,
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: hardhatNetworkSettings,
    localhost: {
      url: "http://127.0.0.1:8545",
      ...hardhatNetworkSettings,
    },
    main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
    rinkeby: getCommonNetworkConfig(eEthereumNetwork.rinkeby, 4),
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    [ePolygonNetwork.polygon]: getCommonNetworkConfig(ePolygonNetwork.polygon, 137),
    [ePolygonNetwork.mumbai]: getCommonNetworkConfig(ePolygonNetwork.mumbai, 80001),
    arbitrum: getCommonNetworkConfig(eArbitrumNetwork.arbitrum, 42161),
    [eArbitrumNetwork.arbitrumTestnet]: getCommonNetworkConfig(eArbitrumNetwork.arbitrumTestnet, 421611),
    [eHarmonyNetwork.main]: getCommonNetworkConfig(eHarmonyNetwork.main, 1666600000),
    [eHarmonyNetwork.testnet]: getCommonNetworkConfig(eHarmonyNetwork.testnet, 1666700000),
    [eAvalancheNetwork.avalanche]: getCommonNetworkConfig(eAvalancheNetwork.avalanche, 43114),
    [eAvalancheNetwork.fuji]: getCommonNetworkConfig(eAvalancheNetwork.fuji, 43113),
    [eFantomNetwork.main]: getCommonNetworkConfig(eFantomNetwork.main, 250),
    [eFantomNetwork.testnet]: getCommonNetworkConfig(eFantomNetwork.testnet, 4002),
    [eOptimismNetwork.testnet]: getCommonNetworkConfig(eOptimismNetwork.testnet, 420),
    [eOptimismNetwork.main]: getCommonNetworkConfig(eOptimismNetwork.main, 10),
    [eEthereumNetwork.goerli]: getCommonNetworkConfig(eEthereumNetwork.goerli, 5),
    [eEthereumNetwork.sepolia]: getCommonNetworkConfig(eEthereumNetwork.sepolia, 11155111),
    [eArbitrumNetwork.goerliNitro]: getCommonNetworkConfig(eArbitrumNetwork.goerliNitro, 421613),
  },
  verify: {
    etherscan: {
      apiKey: ETHERSCAN_KEY,
    },
  },
};

export default config;
