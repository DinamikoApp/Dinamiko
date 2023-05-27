const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const LinkBalanceMonitoraddress = "0xddF8303568877Fa073b3013D25030E152d23B4fb";
const watchAdress = "0x2467A6BbB2053C036e33D278348241bB99CF8861";
const minBalancesWei = "900000000000000000";
const topUpAmountsWei = "100000000000000000";

async function TopUp() {
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

  const linkBalanceMonitorFactory = await ethers.getContractFactory(
    "LinkBalanceMonitor"
  );

  const linkBalanceMonitor = await linkBalanceMonitorFactory.attach(
    LinkBalanceMonitoraddress
  );

  const watchList = await linkBalanceMonitor.setWatchList(
    [watchAdress],
    [minBalancesWei],
    [topUpAmountsWei]
  );
  await watchList;
  console.log("The watch list is", watchList.toString());

  const topUp = await linkBalanceMonitor.topUp([watchAdress]);
  await topUp;

  console.log("The watch list is", topUp.toString());
}

TopUp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
