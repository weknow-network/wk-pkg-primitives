import { guardRecord } from './record-guard';

interface IFoo {
  x: string;
  y: number;
}

test("guardRecord", () => {
  const obj = { x: 'A', y:1, other: 0};
  if(guardRecord(obj)){
    expect(obj['y']).toBe(1);
    expect(obj['x']).toBe('A');
  } 
});

test("guardRecord<IFoo>", () => {
  const obj = { x: 'A', y:1};
  if(guardRecord<IFoo>(obj)){
    expect(obj.y).toBe(1);
    expect(obj.x).toBe('A');
  } 
});

test("guardRecord primitives", () => {
  if(guardRecord(10)){
    throw Error("Unexpected");
  } 
  if(guardRecord('not a record')){
    throw Error("Unexpected");
  } 
});

test("guardRecord array", () => {
  if(guardRecord([])){
    throw Error("Unexpected");
  } 
  if(guardRecord(['a', 'b'])){
    throw Error("Unexpected");
  } 
});