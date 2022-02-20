import { guardNumber } from "../../guards/number-guard";
import { guardString } from "../../guards/string-guard";

export const fromKeyOf = <T extends Record<string, string | number>>(
  source: T,
  item?: keyof T | string | number
): string | number | undefined => {
  if (item == null) return item;
  if (guardString(source)) return source;
  if (guardNumber(source)) return source;
  const entries = Object.entries(source);
  const match = entries.find((m) => item === m[0]);
  if (!match) return guardNumber(item) ? item : (item as string);
  const res = match[1];
  return res;
};
