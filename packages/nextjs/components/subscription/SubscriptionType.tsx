import React, { useState } from "react";
import Image from "next/image";

interface Subscription {
  id: number;
  title: string;
  imageSrc: string;
}

export function SubscriptionType() {
  const [selectedSubscription, setSelectedSubscription] = useState<number | null>(null);

  const handleSubscriptionChange = (subscriptionId: number) => {
    setSelectedSubscription(subscriptionId);
    console.log(subscriptionId);
  };

  const subscriptions: Subscription[] = [
    {
      id: 1,
      title: "Time based",
      imageSrc: "/assets/img/3d-hourglass.svg",
    },
    {
      id: 2,
      title: "Inflation rate",
      imageSrc: "/assets/img/inflation.svg",
    },
    {
      id: 3,
      title: "Asset price",
      imageSrc: "/assets/img/3d-sold.svg",
    },
    {
      id: 4,
      title: "Trending volume",
      imageSrc: "/assets/img/trending.svg",
    },
  ];

  return (
    <div>
      <h1 className="text-sm font-medium mb-4">Create a subscription</h1>
      <h2 className="text-3xl font-medium mb-12">Please select subscription type</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {subscriptions.map(subscription => (
          <div
            className={`p-1 ${selectedSubscription === subscription.id ? "bg-gradient" : "bg-lightgradient"}`}
            key={subscription.id}
          >
            <div className="p-4 relative bg-primary h-full">
              <label className="absolute top-2 right-2">
                <input
                  type="radio"
                  name="subscription"
                  value={subscription.id}
                  checked={selectedSubscription === subscription.id}
                  onChange={() => handleSubscriptionChange(subscription.id)}
                  className="form-radio h-4 w-4 text-blue-500 cursor-pointer"
                />
              </label>
              <Image src={subscription.imageSrc} alt={subscription.title} width={300} height={200} className="mb-2" />
              <p className=" font-medium text-center">{subscription.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
