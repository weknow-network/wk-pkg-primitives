/**
 * conditional type
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */
export type StringOrKeyof<T> = T extends string
  ? string
  : T extends number
  ? number
  : keyof T;
