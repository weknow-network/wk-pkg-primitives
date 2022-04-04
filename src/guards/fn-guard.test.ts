import { guardFn } from "./fn-guard";

const f1 = (a: number) => a * 2;
test("guardFn", () => {
  let maybe: number | ((a: number) => void) | undefined;
  if(guardFn<(a: number) => void>(maybe)){
    throw Error("Unexpected");    
  } 
  maybe = f1;
  if(guardFn<(a: number) => void>(maybe)){
    const x = maybe(21);
    expect(x).toBe(42);    
  } 
  else {
    throw Error("Unexpected");  
  }
  maybe = 10;
  if(guardFn(maybe)){
    throw Error("Unexpected");    
  } 
});