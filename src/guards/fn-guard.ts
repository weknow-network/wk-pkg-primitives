/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * guard function
 * @param candidate
 * @return true is candidate is a function false otherwise
 * @example if(guardFn(prm))
 */
export const guardFn = <T extends (_agrs: never) => (void | never)>(
  candidate: any
): candidate is T => {
  return typeof candidate === 'function';
};
