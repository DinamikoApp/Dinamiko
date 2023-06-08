import { ethers } from "ethers";
import { parse, stringify } from "envfile";
import * as fs from "fs";

const envFilePath = "./.env";

/**
 * Generate a new random private key and write it to the .env file
 * @param existingEnvConfig
 */
const setNewEnvConfig = (existingEnvConfig = {}) => {
  console.log("👛 Generating new Wallet");
  const randomWallet = ethers.Wallet.createRandom();

  const newEnvConfig = {
    ...existingEnvConfig,
    MNEMONIC: randomWallet.mnemonic.phrase,
  };

  // Store in .env
  fs.writeFileSync(envFilePath, stringify(newEnvConfig));
  console.log("📄 mnemonic saved to packages/hardhat/.env file");
};

async function main() {
  if (!fs.existsSync(envFilePath)) {
    // No .env file yet.
    setNewEnvConfig();
    return;
  }

  // .env file exists
  const existingEnvConfig = parse(fs.readFileSync(envFilePath).toString());
  if (existingEnvConfig.MNEMONIC) {
    console.log("⚠️ You already have a deployer account. Check the packages/hardhat/.env file");
    return;
  }

  setNewEnvConfig(existingEnvConfig);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
