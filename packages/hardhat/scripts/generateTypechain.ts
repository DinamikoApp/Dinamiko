import { runTypeChain, glob } from "typechain";

async function main() {
  const cwd = process.cwd();
  const config = {
    paths: {
      artifacts: "./node_modules/@uniswap/v3-periphery/artifacts",
    },
  };
  const allFiles = glob(cwd, [`${config.paths.artifacts}/!(build-info)/**/+([a-zA-Z0-9_]).json`]);

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    outDir: "typechain-types/abiDeploy/common/stuff",
    target: "ethers-v5",
    allFiles,
    flags: {
      alwaysGenerateOverloads: false,
      discriminateTypes: true,
      tsNocheck: false,
      node16Modules: true,
      environment: "hardhat",
    },
  });

  console.log(`Generating TypeChain for ${result.filesGenerated} from  ABIS`);
}

main().catch(console.error);
