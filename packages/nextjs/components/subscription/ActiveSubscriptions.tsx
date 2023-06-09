import React from "react";
import { SubscriptionItem, SubscriptionItemEmptyState, SubscriptionItemLoadingState } from "./index";
import { GetSubscriptions } from "~~/firebase/firestore";

export function ActiveSubscriptions({
  subscriptions,
  loading,
}: {
  subscriptions: GetSubscriptions[];
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
  subscriptions: GetSubscriptions[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <>
        <SubscriptionItemLoadingState />
        <SubscriptionItemLoadingState />
        <SubscriptionItemLoadingState />
      </>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <>
        <SubscriptionItemEmptyState />
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
