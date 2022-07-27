const myRemove = require('./myRemove.js')

describe("myRemove(arr, item) receives an array and returns a copy it without 'item'", () => {
    it("myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]); 
    });

    it("myRemove([1, 2, 3, 4], 3) NOT returns [1, 2, 4]", () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });

});