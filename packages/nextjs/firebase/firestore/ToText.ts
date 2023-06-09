import { SubscriptionTransaction, Subscriptions } from "./types";
import moment from "moment";
import { toast } from "react-toastify";
import { SUPPORTED_ACTIONS, SUPPORTED_TYPE } from "~~/networkHelpers";

export const convertSubscriptionTransaction = (
  subscriptionTransaction: SubscriptionTransaction,
  id: number,
): Subscriptions | undefined => {
  const type = SUPPORTED_ACTIONS[subscriptionTransaction.action].title;
  const action = SUPPORTED_TYPE[subscriptionTransaction.type];
  if (!action || !type) {
    toast.error("Please section subscription type and action");
    return;
  }
  const description = `${action} ${subscriptionTransaction.asset} by ${type} Subscription if price change by ${subscriptionTransaction.subscriptionCondition}%`;
  const expirationDate = moment().add(1, "year").format("DD MMMM YYYY");
  const subscriptionDate = moment().format("DD MMMM YYYY");
  return { description, expirationDate, subscriptionDate, id };
};
