/**
 * Guard for record
 * @param candidate the evaluating type
 */
export const guardRecord = <T extends unknown = Record<string, unknown>>(
  param: unknown
): param is T => {
  return typeof param === 'object' && !Array.isArray(param);
};

/**
 * Guard for record
 * @param candidate the evaluating type
 */
export const isRecord = (param: unknown): param is Record<string, unknown> =>
  guardRecord(param);
