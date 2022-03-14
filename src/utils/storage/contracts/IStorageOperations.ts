export interface IStorageOperations {
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
