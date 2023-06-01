const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

async function BTCInterestFeed() {
  const provider = new ethers.providers.InfuraProvider(
    "sepolia",
    process.env.INFURA_API_KEY_SEPOLIA
  );

  // Get the private key from the environment variable
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey || privateKey.length <= 0) {
    throw new Error("Private key missing");
  }

  //Connect to the wallet
  const wallet = new ethers.Wallet(privateKey);
  console.log("Connected to the wallet address", wallet.address);
  signer = wallet.connect(provider);
  console.log("The signer is", signer.address);

  await run("compile");

  const BTCInterestRateFactory = await ethers.getContractFactory(
    "BTCInterestRate"
  );

  const BTCInterestRateFeed = await BTCInterestRateFactory.deploy();

  const waitBlockConfirmations = VERIFICATION_BLOCK_CONFIRMATIONS;
  await BTCInterestRateFeed.deployTransaction.wait(waitBlockConfirmations);

  // await run("verify:verify", {
  //   address: linkBalanceMonitor.address,
  //   constructorArguments: [keeperRegistryAddress, minWaitPeriodSeconds],
  // });

  console.log(`BTC Interest Rate deployed to ${BTCInterestRateFeed.address}`);
}

BTCInterestFeed().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
