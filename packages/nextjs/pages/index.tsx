import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import Newsletter from "~~/components/Newsletter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dinamiko</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      {/*   <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/nextjs/pages/index.tsx</code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract <code className="italic bg-base-300 text-base font-bold">YourContract.sol</code> in{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/hardhat/contracts</code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-12 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6">
            <h1 className="text-5xl font-bold mb-6 leading-[1.3]">
              Helping you <span className="text-gradient">Invest dynamically </span> in crypto hands-free with our help
            </h1>
            <p className="mb-6 text-2xl leading-[1.5]">
              Using both on-chain and off-chain data to perform transactions
            </p>
            <div className="flex space-x-4 mb-8 text-sm">
              <button className="bg-gradient text-white py-2 px-4 rounded ">Get started</button>
              <button className=" text-white py-2 px-4 rounded border-2 border-white">Connect Wallet</button>
            </div>
          </div>

          <div className="md:w-1/2 px-6">
            <Image src="/assets/hero-image.png" alt="Hero Image" layout="responsive" width={640} height={570} />
          </div>
        </div>
      </section>

      <section className="py-8 mb-32">
        <div className="container mx-auto px-4 font-bold">
          <h2 className="text-3xl text-center">Use Cases</h2>
          <div className="flex flex-wrap justify-center text-center relative pt-32">
            <div className="absolute inset-0 flex justify-center items-center ml-12 -mt-4">
              <Image src="/assets/line.svg" alt="Background Image" layout="fill" objectFit="cover" />
            </div>

            <div className="w-1/2 md:w-auto md:flex-1 -mx-12 relative text-2xl">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-1 px-10 py-16 shadow-md">
                    Buy or Sell a Token if the price crosses a price mark.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-auto md:flex-1 relative translate-y-0 md:translate-y-1/2 text-2xl">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-2 px-10 py-16 shadow-md">
                    Buy a token if the inflation rate goes above a mark.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-auto md:flex-1 -mx-12 relative text-2xl">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-3 px-10 py-16 shadow-md">
                    Add liquidity to a pool if the trading volume crosses a mark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
