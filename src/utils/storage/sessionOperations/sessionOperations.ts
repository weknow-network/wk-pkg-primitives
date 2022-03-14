import { IStorageOperations } from "../contracts/IStorageOperations";

export const sessionOperations = (): IStorageOperations => {
  const getItem = (key: string): string | undefined => {
    const isServer = typeof window === "undefined";
    const res = isServer ? undefined : sessionStorage.getItem(key);
    return res === "" || res == null ? undefined : res;
  };

  const setItem = (key: string, value: string): boolean => {
    const isServer = typeof window === "undefined";
    if (isServer) return false;

    sessionStorage.setItem(key, value);
    return true;
  };

  const removeItem = (key: string): boolean => {
    const isServer = typeof window === "undefined";
    if (isServer) return false;

    sessionStorage.removeItem(key);
    return true;
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
