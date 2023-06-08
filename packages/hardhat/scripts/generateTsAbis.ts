import * as fs from "fs";
//@ts-expect-error  This script runs after `hardhat deploy --export` therefore its deterministic that it will present
import allGeneratedContracts from "../temp/hardhat_contracts.json";
import factoryContracts from "../temp/factory_deployed.json";

import prettier from "prettier";
import { getChainId, isForkedNetwork, getNetworkName, isLocalDevelopmentNetwork } from "../helpers/utilities/utils";

async function main() {
  const TARGET_DIR = "../nextjs/generated/";

  const chainId = (getChainId() || 31337).toString();
  const isForked = await isForkedNetwork();

  if (isLocalDevelopmentNetwork(getNetworkName()) && !isForked) {
    // console.log(fileContent);
    const generatedContracts = allGeneratedContracts[chainId][0].contracts;
    allGeneratedContracts[chainId][0].contracts = { ...generatedContracts, ...factoryContracts };
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

  // remove generated output temp folder
  fs.rmSync("./temp", { recursive: true, force: true });
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
