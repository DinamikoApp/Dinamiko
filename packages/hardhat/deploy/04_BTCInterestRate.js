const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const BTCInterestFeedAddress = "0xD2Be8d7e864a6F3B800bFd3F408C6948C4a1112D";
//onst TIME = "1";
//const TIME = "7";
const TIME = "14";

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

  const BTCInterestFeedFactory = await ethers.getContractFactory(
    "BTCInterestRate"
  );

  const BTCInterestFeed = await BTCInterestFeedFactory.attach(
    BTCInterestFeedAddress
  );

  const BTCInterestValues = await BTCInterestFeed.getBTCInterestCurve(TIME);
  await BTCInterestValues;

  console.log("The BTC Interest value is", BTCInterestValues.toString());
}

BTCInterestValue().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
