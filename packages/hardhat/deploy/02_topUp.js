const hre = require("hardhat");
const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const LinkBalanceMonitoraddress = "0xb463868d287E0C8051D023E0F73F13BcB960D811";
const watchAdress = "0x4EAE8D64c1eD295ffDE9F367807bA1270341024e";
const minBalancesWei = "10000000000000000000";
const topUpAmountsWei = "30000000000000000";
// const to = "0x4EAE8D64c1eD295ffDE9F367807bA1270341024e";
// const amount = "20000000000000000";

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

  // const transferLink = await linkBalanceMonitor.transfer(to, amount);
  // console.log("I'm here");
  // console.log("The transfer is", transferLink);

  const watchList = await linkBalanceMonitor.setWatchList(
    [watchAdress],
    [minBalancesWei],
    [topUpAmountsWei]
  );
  await watchList;
  console.log("The watch list is", watchList.toString());

  const topUp = await linkBalanceMonitor.topUp([watchAdress]);
  await topUp;

  // console.log("The watch list is", topUp.toString());
}

TopUp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
