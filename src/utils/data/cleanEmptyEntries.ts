/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const cleanEmptyEntriesRec = (val: any): unknown => {
  if (!(val instanceof Object)) return val;

  const filtered: any = Object.entries(val)
    .map((element) => [element[0], cleanEmptyEntriesRec(element[1])])
    .filter((element) => element[1]);

  // eslint-disable-next-line no-nested-ternary
  return filtered.length
    ? val instanceof Array
      ? filtered.map((obj: (string | any)[]) => obj[1])
      : Object.fromEntries(filtered)
    : null;
};

export const cleanEmptyEntries = <T, TResult = T>(val: T): TResult => {
  if (Array.isArray(val)) {
    return val.map((v) => cleanEmptyEntries(v)) as unknown as TResult;
  }

  const result = cleanEmptyEntriesRec(val) as TResult;
  return result;
};
