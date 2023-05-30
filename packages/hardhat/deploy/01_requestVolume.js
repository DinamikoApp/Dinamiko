const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const APIConsumeraddress = "0x421D71DfeDC7f00F714766747edD222ed765D446";
const AMOUNT = 1;
const symbol = "BNB";

async function APIConsumer() {
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

  const APIConsumerFactory = await ethers.getContractFactory("APIConsumer");

  const APIConsumer = await APIConsumerFactory.attach(APIConsumeraddress);

  //Necessary to fund the contract with LINK

  const requestVolume = APIConsumer.requestVolumeData(symbol);
  await requestVolume;

  const volume = await APIConsumer.volume();
  console.log("The 24h volume after the request is", volume.toString());

  // const withdrawLink = APIConsumer.withdrawLink();
  // await withdrawLink;
  // console.log("Withdrawn LINK from contract");
}

APIConsumer().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
