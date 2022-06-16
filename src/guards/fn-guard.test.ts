import { guardFn } from "./fn-guard";

const f1 = (a: number) => a * 2;

test("guardFn", () => {
  let maybe: number | ((a: number) => void) | undefined;
  if (guardFn<(a: number) => void>(maybe)) {
    throw Error("Unexpected");
  }
  maybe = f1;
  if (guardFn<(a: number) => void>(maybe)) {
    const x = maybe(21);
    expect(x).toBe(42);
  } else {
    throw Error("Unexpected");
  }
  maybe = 10;
  if (guardFn(maybe)) {
    throw Error("Unexpected");
  }
});

/**
 * Factory for creating text setting
 */
export type FACTORY<T = string> = (option: T) => T | undefined;

type FN_RETURN = (a: number) => number;

test("guardFn (with return)", () => {
  let maybe: number | FN_RETURN | undefined;
  if (guardFn<FN_RETURN>(maybe)) {
    throw Error("Unexpected");
  }
  maybe = f1;
  if (guardFn<FACTORY<number>>(maybe)) {
    const x = maybe(21);
    expect(x).toBe(42);
  } else {
    throw Error("Unexpected");
  }
  maybe = 10;
  if (guardFn(maybe)) {
    throw Error("Unexpected");
  }
});

test("guardFn (with return factory)", () => {
  let maybe: number | FACTORY<number> | undefined;
  if (guardFn<FACTORY<number>>(maybe)) {
    throw Error("Unexpected");
  }
  if (guardFn<FACTORY<number>>(f1)) {
    const x = f1(21);
    expect(x).toBe(42);
  } else {
    throw Error("Unexpected");
  }
  if (guardFn<FACTORY<number>>(10)) {
    throw Error("Unexpected");
  }
});
