import { guardStringArray} from "./string-array-guard";


test("guardStringArray", async () => {
  let maybe: number | string | string[] | unknown | undefined;
  if(guardStringArray(maybe)){
    throw Error("Unexpected");    
  } 
  maybe = ['A', 'B'];
  if(guardStringArray(maybe)){
    expect(maybe).toEqual(['A', 'B']);    
  } 
  else {
    throw Error("Unexpected");  
  }
  maybe = 10;
  if(guardStringArray(maybe)){
    throw Error("Unexpected");    
  } 
  maybe = 'A';
  if(guardStringArray(maybe)){
    throw Error("Unexpected");    
  } 
  maybe = [1, 'A', 1];
  if(guardStringArray(maybe)){
    throw Error("Unexpected");    
  } 
});

test("guardStringArray false positive", async () => {
  let maybe: number | string | string[] | unknown | undefined;
  maybe = ['A', 1];
  if(guardStringArray(maybe)){
    console.log('False positive')  
  } else {
    throw Error("Unexpected");    
  }
});