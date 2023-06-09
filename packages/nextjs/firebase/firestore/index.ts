import { database } from "../firebaseConfig";
import { Subscriptions } from "./types";
import { DocumentData } from "@firebase/firestore-types";
import { addDoc, collection, getDocs } from "firebase/firestore";

const dbInstanceSubscription = collection(database, "subscriptions");
export type GetSubscriptions = DocumentData & { key: string };

export const saveSubscription = (subscriptions: Subscriptions, address: string) => {
  addDoc(dbInstanceSubscription, { ...subscriptions, address });
};

export const getAllSubscription = async (): Promise<GetSubscriptions[]> => {
  const data = await getDocs(dbInstanceSubscription);
  const result = data.docs.map(item => {
    return { ...item.data(), key: item.id };
  });
  console.log(result);
  return result;
};

export const getUserSubscription = async (address: string | undefined) => {
  if (address === undefined) return [];
  return (await getAllSubscription()).filter(data => data.address === address);
};
