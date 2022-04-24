import {add} from './helper';

describe(`helper.ts`, ()=>{
  describe(`add(...)`, ()=>{
    it('should add numbers', ()=>{
      const result:number = add(2, 3);
      expect(result).toStrictEqual(5);
    });
  });
});
