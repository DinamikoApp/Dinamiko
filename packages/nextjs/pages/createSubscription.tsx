import Head from "next/head";
import type { NextPage } from "next";

const CreateSubscription: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Subscription</title>
        <meta name="description" content="Dinamiko | create subscription" />
      </Head>

      <section>
        <div className="container mx-auto p-4">
          <h2 className="text-sm font-medium text-gray-500">Create a subscription</h2>
          <h1 className="text-2xl font-bold mt-4">Select an asset</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="border border-gray-300 p-4 text-center">
              <p className="text-lg font-semibold mb-2">ETH</p>
              <p className="text-gray-500">ETH/USDT</p>
            </div>
            <div className="border border-gray-300 p-4 text-center">
              <p className="text-lg font-semibold mb-2">ETH</p>
              <p className="text-gray-500">ETH/USDT</p>
            </div>
            <div className="border border-gray-300 p-4 text-center">
              <p className="text-lg font-semibold mb-2">ETH</p>
              <p className="text-gray-500">ETH/USDT</p>
            </div>
            <div className="border border-gray-300 p-4 text-center">
              <p className="text-lg font-semibold mb-2">ETH</p>
              <p className="text-gray-500">ETH/USDT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateSubscription;
