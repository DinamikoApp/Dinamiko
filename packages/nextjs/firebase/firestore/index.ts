import { database } from "../firebaseConfig";
import { Subscriptions } from "./types";
import { DocumentData } from "@firebase/firestore-types";
import { addDoc, collection, getDocs } from "firebase/firestore";

const dbInstanceSubscription = collection(database, "subscriptions");

const dbInstanceUser = collection(database, "users");

export type GetSubscriptions = DocumentData & { key: string };
export type GetUser = DocumentData & { key: string };

export const saveSubscription = (subscriptions: Subscriptions, address: string) => {
  addDoc(dbInstanceSubscription, { ...subscriptions, address });
};

export const getAllSubscription = async (): Promise<GetSubscriptions[]> => {
  const data = await getDocs(dbInstanceSubscription);
  const result = data.docs.map(item => {
    return { ...item.data(), key: item.id };
  });
  return result;
};

export const getUserSubscription = async (address = "") => {
  if (address === undefined) return [];
  return (await getAllSubscription()).filter(data => data.address === address);
};

export const saveUser = (address = "") => {
  if (address == "") return;
  addDoc(dbInstanceUser, {
    address,
    dataFeedBasedSubscriptionAddress: "",
    inflationBasedSubscriptionAddress: "",
    priceFeedBasedSubscriptionAddress: "",
    timeBasedSubscriptionAddress: "",
    tradingVolumeBasedSubscriptionAddress: "",
  });
};

export const getAllUsers = async (): Promise<GetSubscriptions[]> => {
  const data = await getDocs(dbInstanceUser);
  const result = data.docs.map(item => {
    return { ...item.data(), key: item.id };
  });
  return result;
};

export const getUser = async (address = "") => {
  if (address === undefined) return [];
  return (await getAllUsers()).filter(data => data.address === address)[0] || null;
};
