import { guardString } from './string-guard';

test("guardString", () => {
  const x = 'A';
  if(guardString(x)){
    expect(x).toBe('A');    
  } 
});

test("guardString with number", () => {
  const x = 10;
  if(guardString(x)){
    throw Error("Unexpected");    
  } 
});

test("guardString with record", () => {
  const x = { a: 1};
  if(guardString(x)){
    throw Error("Unexpected");    
  } 
});