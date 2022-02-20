/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * guard number
 * @param candidate
 * @return true is candidate is a number false otherwise
 * @example if(guardNumber(prm))
 */
export const guardFn = <T extends (agrs: never) => void | never>(
  candidate: any
): candidate is T => {
  return typeof candidate === 'function';
};
