export type SupportedTokens = {
  [key: string]: string;
};

export type SubscriptionForm = {
  type: number;
  action: number;
  asset: string;
  liquidityPool: string;
  subscriptionCondition: number;
  subscriptionTime: number;
};
