import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { FaucetTable } from "~~/components/TokenFaucet";

const TokenFaucetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Faucet </title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="p-4 lg:w-10/12 lg:mx-auto">
        <div className=" my-10">
          <div className="flex h-10 space-x-4 ">
            <img className="" src="./token/ethereum.svg" />
            <p className="flex-auto h-10 text-3xl m-0 font-bold ">Ethereum Goerli Faucet</p>
          </div>
          <div className="w-4/6">
            <p className="font-sm text-secondary-content opacity-75 ">
              With testnet Faucet you can get free assets to test this limit order protocols. Make sure to switch your
              wallet provider to the appropriate testnet network, select desired asset, and click ‘Faucet’ to get tokens
              transferred to your wallet. The assets on a testnet are not “real,” meaning they have no monetary value.
            </p>
          </div>
        </div>
        <FaucetTable />
      </div>
    </>
  );
};

export default TokenFaucetPage;
