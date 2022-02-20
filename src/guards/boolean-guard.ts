/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * guard boolean
 * @param candidate
 * @return true is candidate is a boolean false otherwise
 * @example if(guardBool(prm))
 */
export const guardBool = (candidate: any): candidate is boolean => {
  return typeof candidate === 'boolean';
};
