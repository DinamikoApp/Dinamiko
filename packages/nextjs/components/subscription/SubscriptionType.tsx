import React, { useState } from "react";
import Image from "next/image";
import { SUPPORTED_ACTIONS } from "~~/networkHelpers";
import { SelectProps } from "~~/types/SelectProp";

interface Subscription {
  id: number;
  title: string;
  imageSrc: string;
}

export function SubscriptionType(props: SelectProps) {
  const [selectedSubscription, setSelectedSubscription] = useState<number>(0);

  const handleSubscriptionChange = (subscriptionId: number) => {
    setSelectedSubscription(subscriptionId);
    props.onSelect(subscriptionId);
  };

  const subscriptions: Subscription[] = SUPPORTED_ACTIONS;

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
