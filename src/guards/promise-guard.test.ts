import { guardPromise } from "./promise-guard";


test("guardPromise", async () => {
  let maybe: number | Promise<number> | undefined;
  if(guardPromise<number>(maybe)){
    throw Error("Unexpected");    
  } 
  maybe = Promise.resolve(42);
  if(guardPromise<number>(maybe)){
    const x = await maybe;
    expect(x).toBe(42);    
  } 
  else {
    throw Error("Unexpected");  
  }
  maybe = 10;
  if(guardPromise(maybe)){
    throw Error("Unexpected");    
  } 
});