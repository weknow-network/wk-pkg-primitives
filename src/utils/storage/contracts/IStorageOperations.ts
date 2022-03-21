export interface IStorageOperations {
  /** unique identifier of the storage (can use for having session id or local storage id semantic) */
  getId: () => string | undefined;
  /**
   * get session's key
   */
  getItem: (key: string) => string | undefined;
  /**
   * Set session key
   * returns false when server side (not available)
   */
  setItem: (key: string, value: string) => boolean;
  /**
   * get session's key as object (deserialized)
   */
  getObject: <T extends unknown>(key: string) => T | undefined;
  /**
   * Set session key with un object (serialize)
   * returns false when server side (not available)
   */
  setObject: <T extends unknown>(key: string, value: T) => boolean;
  /**
   * remove session key
   * returns false when server side (not available)
   */
  removeItem: (key: string) => boolean;
}
