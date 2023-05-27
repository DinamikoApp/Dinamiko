const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
// const linkAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
// const oracleAddress = "0x40193c8518BB267228Fc409a613bDbD8eC5a97b3";

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

  const APIConsumer = await APIConsumerFactory.deploy();

  const waitBlockConfirmations = VERIFICATION_BLOCK_CONFIRMATIONS;
  await APIConsumer.deployTransaction.wait(waitBlockConfirmations);

  await run("verify:verify", {
    address: APIConsumer.address,
    //constructorArguments: [priceFeedAddress],
  });

  console.log(`API Consumer deployed to ${APIConsumer.address}`);

  // const volumeBefore = await APIConsumer.volume();
  // console.log("The volume before the request is", volumeBefore.toString());

  // const requestVolume = APIConsumer.requestVolumeData();
  // await requestVolume;

  // tx = await APIConsumer.waitBlockConfirmations(
  //   VERIFICATION_BLOCK_CONFIRMATIONS
  // );

  // const volumeAfter = await APIConsumer.volume();
  // console.log("The volume after the request is", volumeAfter.toString());
}

APIConsumer().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
