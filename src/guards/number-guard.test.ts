import { guardNumber } from "./number-guard";

test("guardNumber", () => {
  const x = 9.9;
  if(guardNumber(x)){
    expect(x).toBe(9.9);    
  } 
});

test("guardNumber with string", () => {
  const x = 'A';
  if(guardNumber(x)){
    throw Error("Unexpected");    
  } 
});

test("guardNumber with record", () => {
  const x = { a: 1};
  if(guardNumber(x)){
    throw Error("Unexpected");    
  } 
});