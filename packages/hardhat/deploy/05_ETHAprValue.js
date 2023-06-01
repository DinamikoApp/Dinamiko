const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const ETHAprFeedAddress = "0xf87d2Bed8dA477001aC86c10eD2d7ebeAA2DCd2e";
//const TIME = "30";
const TIME = "90";

async function BTCInterestValue() {
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

  const ETHAprFeedFactory = await ethers.getContractFactory("ETHAprFeed");

  const ETHAPrFeed = await ETHAprFeedFactory.attach(ETHAprFeedAddress);

  const ETHAPrValues = await ETHAPrFeed.getETHApr(TIME);
  await ETHAPrValues;

  console.log("The ETH APR value is", ETHAPrValues.toString());
}

BTCInterestValue().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
