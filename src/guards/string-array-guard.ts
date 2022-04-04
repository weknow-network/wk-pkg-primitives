/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { guardString } from "./string-guard";

/**
 * String gard
 * @param candidate
 * @return true is candidate is a string false otherwise
 * @example if(guardString(prm))
 * @remark Test the first index of the array, i.e. ['A', 1] will return positive result
 */
export const guardStringArray = (
  candidate: any
): candidate is Array<string> => {
  return Array.isArray(candidate) && guardString(candidate[0]);
};
