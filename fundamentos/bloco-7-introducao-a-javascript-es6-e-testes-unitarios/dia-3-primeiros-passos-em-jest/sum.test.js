const sum = require("./sum.js");

describe("The function sum(a, b) returns a plus b", () => {
    it("sum(4, 5) is 9", () => {
        expect(sum(4, 5)).toBe(9);
    });

    it("sum(0, 0) is 0", () => {
      expect(sum(0, 0)).toBe(0);
    });

    it("throws a erro when sum (4 e '5')", () => {
      expect(() => sum(4, "5")).toThrow();
    });

});