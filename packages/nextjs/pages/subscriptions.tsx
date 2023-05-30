import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { ActiveSubscriptions, TSubscriptionItemProps } from "~~/components/subscription";

("react");

const Subscriptions: NextPage = () => {
  const defaultActions: TSubscriptionItemProps[] = [
    {
      description: "Buy BTC is the price reduces by 5%",
      subscriptionDate: "27th May, 2023",
      expirationDate: "1st July, 2023",
    },
    {
      description: "Buy BTC is the price reduces by 5%",
      subscriptionDate: "27th May, 2023",
      expirationDate: "1st July, 2023",
    },
    {
      description: "Buy BTC is the price reduces by 5%",
      subscriptionDate: "27th May, 2023",
      expirationDate: "1st July, 2023",
    },
  ];

  const [subscriptions, setSubscriptions] = useState<TSubscriptionItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    const subTimer = setTimeout(() => {
      setSubscriptions(defaultActions);
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer); // Clean up the timer on component unmount
      clearTimeout(subTimer);
    };
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
