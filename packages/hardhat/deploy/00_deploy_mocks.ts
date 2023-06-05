import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getNetworkName, isLocalDevelopmentNetwork } from "../helpers/utilities/utils";
import { MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES, MOCK_TOKEN_LIST } from "../helpers/constants";
import { deployLinkToken, deployMockToken, deployMockV3Aggregator } from "../helpers/contract-deployments";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployMocks: DeployFunction = async function ({ deployments }: HardhatRuntimeEnvironment) {
  const { log } = deployments;
  // Should Only Deploy Mock If it Local Network
  if (isLocalDevelopmentNetwork(getNetworkName())) {
    log("Local network detected! Deploying Mock Tokens...");
    for (const key in MOCK_TOKEN_LIST) {
      if (key === "ETH") continue;
      if (key === "LINK") {
        await deployLinkToken();
        continue;
      }
      await deployMockToken(key, MOCK_TOKEN_LIST[key]);
    }
    log("Done \n \n");
    log("Deploying Mock Price Feed Aggregators ...");

    for (const key in MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES) {
      await deployMockV3Aggregator(key, MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES[key]);
    }
  }
};

export default deployMocks;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployMocks.tags = ["Mocks"];
