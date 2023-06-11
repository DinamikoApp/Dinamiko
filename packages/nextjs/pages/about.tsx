import Head from "next/head";
import type { NextPage } from "next";

const ExampleUI: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Dinamiko</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <div className="container text-center bg-gradient mx-auto p-1 mt-10">
        <div className=" px-10 py-10 bg-[#000116]">
          <h2 className="text-3xl text-center font-bold mb-4">About</h2>
          <p className="text-lg text-center mb-12">
            Discover a cutting-edge open-source solution for web3 decentralized applications (dapps) operating on the
            blockchain. This remarkable platform streamlines investment trading decisions by leveraging a combination of
            on-chain and off-chain events or data statuses through the remarkable capabilities of Chainlink. Under the
            hood, this innovative platform is powered by the advanced Scaffold-ETH toolkit, integrating the robust
            Chainlink Data Feed and API alongside the transformative capabilities of web3 technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div className="flex-1  p-4 bg-[#00022C] mr-4">
              <h3 className="text-xl font-bold mb-4">Actions</h3>
              <p className="">Seamlessly execute asset buy/sell transactions and contribute liquidity.</p>
            </div>
            <div className="flex-1 mr-4 p-4 bg-[#00022C]">
              <h3 className="text-xl font-bold mb-4">Subscription types</h3>
              <p className="">Choose from time-based, price-based, or trading volume-based options.</p>
            </div>
            <div className="flex-1  p-4 bg-[#00022C]">
              <h3 className="text-xl font-bold mb-4">Tokens</h3>
              <p className="">Engage with popular cryptocurrencies such as ETH, LINK, BNB, and MATIC.</p>
            </div>
          </div>
          {/*   <p className="mt-6 text-sm">
            Under the hood, this innovative platform is powered by the advanced Scaffold-ETH toolkit, integrating the
            robust Chainlink Data Feed and API alongside the transformative capabilities of web3 technology.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default ExampleUI;
