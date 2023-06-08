import { runTypeChain, glob } from "typechain";

interface TypeChainCOnfig {
  path: string;
  name: string;
}

async function generateTypeChain(config: TypeChainCOnfig) {
  const cwd = process.cwd();
  const corePath = glob(cwd, [`${config.path}/!(build-info)/**/+([a-zA-Z0-9_]).json`]);
  const result = await runTypeChain({
    cwd,
    filesToProcess: corePath,
    outDir: `typechain-types/deployFromAbi/${config.name}/`,
    target: "ethers-v5",
    allFiles: corePath,
    flags: {
      alwaysGenerateOverloads: false,
      discriminateTypes: true,
      tsNocheck: false,
      node16Modules: true,
      environment: "hardhat",
    },
  });
  console.log(`Generating TypeChain for ${result.filesGenerated} from  ABIS  for ${config.name}`);
}
async function main() {
  const config: TypeChainCOnfig[] = [
    {
      path: "./node_modules/@uniswap/v3-periphery/artifacts",
      name: "v3-periphery",
    },
    {
      path: "./node_modules/@uniswap/v3-core/artifacts",
      name: "v3-core",
    },
  ];

  for (const key in config) {
    generateTypeChain(config[key]);
  }
}

main().catch(console.error);
