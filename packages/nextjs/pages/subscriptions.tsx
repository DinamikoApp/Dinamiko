import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ActiveSubscriptions } from "~~/components/subscription";
import { GetSubscriptions, getUserSubscription } from "~~/firebase/firestore";

const Subscriptions: NextPage = () => {
  const [subscriptions, setSubscriptions] = useState<GetSubscriptions[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { address } = useAccount();

  useEffect(() => {
    getUserSubscription(address).then(data => {
      setLoading(false);
      setSubscriptions(data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Scaffold-ETH 2 Example Ui</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <ActiveSubscriptions subscriptions={subscriptions} loading={loading} />
    </>
  );
};

export default Subscriptions;
