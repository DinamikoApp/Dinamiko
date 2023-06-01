const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
//const keeperRegistryAddress = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2";
//Set an appropriate wait period for the keeper to perform the upkeep on the link balance monitor
//const minWaitPeriodSeconds = "86400";

async function VolatilityFeed() {
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

  const VolatilityFeedFactory = await ethers.getContractFactory(
    "VolatilityFeed"
  );

  const VolatilityFeed = await VolatilityFeedFactory.deploy();

  const waitBlockConfirmations = VERIFICATION_BLOCK_CONFIRMATIONS;
  await VolatilityFeed.deployTransaction.wait(waitBlockConfirmations);

  // await run("verify:verify", {
  //   address: linkBalanceMonitor.address,
  //   constructorArguments: [keeperRegistryAddress, minWaitPeriodSeconds],
  // });

  console.log(`Volatility Feed deployed to ${VolatilityFeed.address}`);
}

VolatilityFeed().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
