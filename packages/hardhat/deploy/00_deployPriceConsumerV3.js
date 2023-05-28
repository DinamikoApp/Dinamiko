const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

let priceFeedAddressEthUsd = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
let priceFeedAddressBtcUsd = "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43";
let priceFeedAddressDaiUsd = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";

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
    "PriceConsumerFeedV3"
  );

  const priceConsumerV3 = await priceConsumerV3Factory.deploy(
    priceFeedAddressEthUsd,
    priceFeedAddressBtcUsd,
    priceFeedAddressDaiUsd
  );
  const waitBlockConfirmations = VERIFICATION_BLOCK_CONFIRMATIONS;
  await priceConsumerV3.deployTransaction.wait(waitBlockConfirmations);

  await run("verify:verify", {
    address: priceConsumerV3.address,
    constructorArguments: [
      priceFeedAddressEthUsd,
      priceFeedAddressBtcUsd,
      priceFeedAddressDaiUsd,
    ],
  });

  console.log(`Price Consumer deployed to ${priceConsumerV3.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
