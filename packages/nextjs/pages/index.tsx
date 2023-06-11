import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import CryptoChart from "~~/components/CryptoChart";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dinamiko</title>
        <meta
          name="description"
          content="Invest dynamically in crypto hands-free

"
        />
      </Head>

      <section>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 md:pt-2 pt-10">
            <h1 className="md:text-5xl text-3xl font-bold mb-6 leading-[1.3]">
              Helping you <span className="text-gradient">Invest dynamically </span> in crypto hands-free with our help
            </h1>
            <p className="mb-6 md:text-2xl text-xl leading-[1.5]">
              Using both on-chain and off-chain data to perform transactions
            </p>
            <div className="flex space-x-4 mb-8 text">
              <Link href="createSubscription" legacyBehavior>
                <a className="bg-gradient text-white py-2 px-4 rounded cursor-pointer">Get started</a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="text-white py-2 px-4 rounded border-2 border-white cursor-pointer">Connect Wallet</a>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 px-6 scale-125">
            <Image src="/assets/hero-image.png" alt="Hero Image" layout="responsive" width={1000} height={900} />
          </div>
        </div>
      </section>

      <section className="py-2 mb-6">
        <div className="container mx-auto px-4 font-600">
          <h2 className="text-3xl text-center">Use Cases</h2>
          <div className="flex flex-wrap flex-col md:flex-row justify-center text-center relative pt-32 ">
            <div className="absolute inset-0 flex justify-center items-center ml-12 -mt-4 none">
              <Image src="/assets/line.svg" alt="Background Image" layout="fill" objectFit="cover" />
            </div>

            <div className="md:w-1/2 md:w-auto md:flex-1 md:-mx-12 relative text-3xl leading-[1.5]">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-1 px-16 py-10 shadow-md">
                    Buy or Sell a Token if the price crosses a price mark.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:w-auto md:flex-1 relative translate-y-0 md:translate-y-1/2 text-3xl leading-[1.5]">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-2 px-16 py-10 shadow-md">
                    Buy a token if the inflation rate goes above a mark.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:w-auto md:flex-1 :md-mx-12 relative text-3xl leading-[1.5]">
              <div className="border border-accent rounded-lg p-1">
                <div className="border border-accent rounded-lg p-1">
                  <div className=" rounded-lg bg-gradient-3 px-16 py-10 shadow-md">
                    Add liquidity to a pool if the trading volume crosses a mark
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CryptoChart />
        </div>
      </section>
    </>
  );
};

export default Home;
