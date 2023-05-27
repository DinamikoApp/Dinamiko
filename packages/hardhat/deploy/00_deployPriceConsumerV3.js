const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");
const { PriceFeedAddressList } = require("../Price-Feed-Address-List.js");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

let priceFeedAddress;

async function main() {
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

  const priceConsumerV3Factory = await ethers.getContractFactory(
    "PriceConsumerV3"
  );

  for (const key in PriceFeedAddressList) {
    priceFeedAddress = PriceFeedAddressList[key].address;

    const priceConsumerV3 = await priceConsumerV3Factory.deploy(
      priceFeedAddress
    );
    const waitBlockConfirmations = VERIFICATION_BLOCK_CONFIRMATIONS;
    await priceConsumerV3.deployTransaction.wait(waitBlockConfirmations);

    await run("verify:verify", {
      address: priceConsumerV3.address,
      constructorArguments: [priceFeedAddress],
    });

    console.log(
      `${PriceFeedAddressList[key].name} Price Consumer deployed to ${priceConsumerV3.address}`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
