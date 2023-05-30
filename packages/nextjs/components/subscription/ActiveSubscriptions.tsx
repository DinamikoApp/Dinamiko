import React from "react";
import { SubscriptionItem, SubscriptionItemEmptyState, TSubscriptionItemProps } from "./index";

export function ActiveSubscriptions({
  subscriptions,
  loading,
}: {
  subscriptions: TSubscriptionItemProps[];
  loading: boolean;
}) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-semibold"> Active subscriptions </h1>
      <div className="flex flex-col w-4/5 item-center justify-center m-auto  ">
        <ActiveSubscriptionsContent subscriptions={subscriptions} loading={loading} />
      </div>
    </div>
  );
}

function ActiveSubscriptionsContent({
  subscriptions,
  loading,
}: {
  subscriptions: TSubscriptionItemProps[];
  loading: boolean;
}) {
  const emptyStateItems = new Array(4);

  if (loading) {
    return <div> </div>;
  }
  if (subscriptions.length == 0) {
    return (
      <>
        {emptyStateItems.map((data, i) => (
          <SubscriptionItemEmptyState key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {subscriptions.map(({ description, subscriptionDate, expirationDate }, i) => (
        <SubscriptionItem
          key={i}
          description={description}
          subscriptionDate={subscriptionDate}
          expirationDate={expirationDate}
        />
      ))}
    </>
  );
}
