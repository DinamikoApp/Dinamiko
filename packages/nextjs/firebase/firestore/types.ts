export type User = {
  address: string;
  dataFeedBasedSubscriptionAddress: string;
  inflationBasedSubscriptionAddress: string;
  priceFeedBasedSubscriptionAddress: string;
  timeBasedSubscriptionAddress: string;
  tradingVolumeBasedSubscriptionAddress: string;
};

export type Subscriptions = {
  description: string;
  expirationDate: string;
  subscriptionDate: string;
  id: number;
  key?: string;
};

export type GetSubscriptions = {
  description: string;
  expirationDate: string;
  subscriptionDate: string;
  id: number;
  key: string;
};

export type SubscriptionTransaction = {
  type: number;
  action: number;
  asset: string;
  liquidityPool: string;
  subscriptionCondition: number;
  subscriptionTime: number;
};
