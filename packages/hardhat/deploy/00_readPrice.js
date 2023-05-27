/* eslint-disable no-process-exit */
const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");
const { PriceFeedAddressList } = require("../Price-Feed-Address-List.js");

dotenv.config();

async function readPrice() {
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

  const priceConsumerV3Factory = await ethers.getContractFactory(
    "PriceConsumerV3"
  );

  for (const key in PriceFeedAddressList) {
    priceFeedAddress = PriceFeedAddressList[key].priceConsumerV3Address;

    const priceConsumerV3 = priceConsumerV3Factory.attach(priceFeedAddress);
    const price = await priceConsumerV3.getLatestPrice();
    console.log(
      `The ${PriceFeedAddressList[key].name} price is`,
      price.toString()
    );
  }
}

readPrice()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
