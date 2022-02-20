/**
 * Get session value
 * Should only be used on non-ui services!,
 * For ui bound component use useSession.
 * @param key
 * @returns
 */
export const getSession = (key: string): string | undefined => {
  if (!window) return undefined;
  if (sessionStorage == null) return undefined;

  const res = sessionStorage.getItem(key);
  if (res == null) return undefined;
  return res;
};
