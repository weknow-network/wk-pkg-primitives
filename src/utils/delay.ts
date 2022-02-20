/**
 * delay async
 * @param ms milliseconds of the delay
 * @returns
 */
export const delay = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
