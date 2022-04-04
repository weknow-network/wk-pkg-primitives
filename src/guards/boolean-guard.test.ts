import { guardBool } from "./boolean-guard";

test("guardBool", () => {
  const x = true;
  if(guardBool(x)){
    expect(x).toBe(true);    
  } 
});

test("guardBool with string", () => {
  const x = 'A';
  if(guardBool(x)){
    throw Error("Unexpected");    
  } 
});

test("guardBool with record", () => {
  const x = { a: 1};
  if(guardBool(x)){
    throw Error("Unexpected");    
  } 
});