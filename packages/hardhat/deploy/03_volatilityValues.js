const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const volatilityFeedAddress = "0xCbCbE68C7c53FC6b896A60a9d00923467aC853eD";
const TIME = "24";
// const TIME = "30";
// const TIME = "168";

async function volatilityValue() {
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

  const volatilityFeedFactory = await ethers.getContractFactory(
    "VolatilityFeed"
  );

  const volatilityFeed = await volatilityFeedFactory.attach(
    volatilityFeedAddress
  );

  const volatilityValues = volatilityFeed.timeFrame(TIME);
  await volatilityValues;

  const lowRiskAsset = await volatilityFeed.getLowRiskAsset();
  console.log("The low Risk asset is", lowRiskAsset.toString());
}

volatilityValue().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
