import { IStorageOperations } from "../contracts/IStorageOperations";
import { v4 as uuidv4 } from "uuid";

export const appStorageOperations = (): IStorageOperations => {
  const getId = () => {
    const isServer = typeof window === "undefined";
    if (isServer) return undefined;

    const key = "__local_storage_id__";
    let res = localStorage.getItem(key);
    if (res == null) {
      res = uuidv4() as string;
      localStorage.setItem(key, res);
    }
    return res;
  };

  const getItem = (key: string): string | undefined => {
    const isServer = typeof window === "undefined";
    const res = isServer ? undefined : localStorage.getItem(key);
    return res === "" || res == null ? undefined : res;
  };

  const setItem = (key: string, value: string): boolean => {
    const isServer = typeof window === "undefined";
    if (isServer) return false;

    localStorage.setItem(key, value);
    return true;
  };

  const getObject = <T extends unknown>(key: string): T | undefined => {
    const raw = getItem(key);
    if(raw == null) return undefined;

    return JSON.parse(raw) as T;
  };

  const setObject = <T extends unknown>(key: string, value: T): boolean => {
    const raw = JSON.stringify(value);
    const res = setItem(key, raw);
    return res;
  };

  const removeItem = (key: string): boolean => {
    const isServer = typeof window === "undefined";
    if (isServer) return false;

    localStorage.removeItem(key);
    return true;
  };

  return {
    getId,
    getItem,
    setItem,
    getObject,
    setObject,
    removeItem,
  };
};
