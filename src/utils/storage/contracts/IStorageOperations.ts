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
   * remove session key
   * returns false when server side (not available)
   */
  removeItem: (key: string) => boolean;
}
