import * as fs from "fs";
import allGeneratedContracts from "../temp/hardhat_contracts.json";
import factoryContracts from "../temp/factory_deployed.json";

import prettier from "prettier";
import { getChainId, isForkedNetwork, getNetworkName, isLocalDevelopmentNetwork } from "../helpers/utilities/utils";

// Define a type for your contracts
interface Contract {
  address: string;
  abi: any; // You should define a more specific type here based on the structure of your ABI
}

// Define a type for a chain configuration
// Define a type for allGeneratedContracts
interface AllGeneratedContracts {
  [key: string]: Array<{ contracts: Record<string, Contract> }>;
}

async function main() {
  const TARGET_DIR = "../nextjs/generated/";

  const chainId = (getChainId() || 31337).toString();
  const isForked = await isForkedNetwork();

  const allGeneratedContractsTyped = allGeneratedContracts as AllGeneratedContracts;

  if (isLocalDevelopmentNetwork(getNetworkName()) && !isForked) {
    if (allGeneratedContractsTyped[chainId] != undefined) {
      const generatedContracts: Record<string, Contract> = allGeneratedContractsTyped[chainId][0]?.contracts;
      allGeneratedContractsTyped[chainId][0].contracts = { ...generatedContracts, ...factoryContracts };
    }
  }

  const fileContent = Object.entries(allGeneratedContracts).reduce((content, [chainId, chainConfig]) => {
    return `${content}${parseInt(chainId).toFixed(0)}:${JSON.stringify(chainConfig, null, 2)},`;
  }, "");

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR);
  }
  fs.writeFileSync(
    `${TARGET_DIR}deployedContracts.ts`,
    prettier.format(`const contracts = {${fileContent}} as const; \n\n export default contracts`, {
      parser: "typescript",
    }),
  );

  // write an empty object to factory_deployed.json instead of deleting it
  fs.writeFileSync("./temp/factory_deployed.json", JSON.stringify({}, null, 2));
  fs.writeFileSync("./temp/hardhat_contracts.json", JSON.stringify({}, null, 2));
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
