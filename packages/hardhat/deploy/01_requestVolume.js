const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const APIConsumeraddress = "0x998199aFf10736C33D44aca75C847A44501EEC7e";
const AMOUNT = 1;

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

  //   fundContract = await APIConsumer.fundContract(AMOUNT);
  //   await fundContract.wait();
  //   console.log("Contract funded with, fundContract.toString()");

  const volumeBefore = await APIConsumer.volume();
  console.log("The volume before the request is", volumeBefore.toString());

  const requestVolume = APIConsumer.requestVolumeData();
  await requestVolume;

  tx = await APIConsumer.waitBlockConfirmations(
    VERIFICATION_BLOCK_CONFIRMATIONS
  );

  const volumeAfter = await APIConsumer.volume();
  console.log("The volume after the request is", volumeAfter.toString());
}

APIConsumer().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
