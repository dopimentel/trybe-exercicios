const sum = require("./sum.js");

describe("The function sum(a, b) returns a plus b", () => {
    it("sum(4, 5) is 9", () => {
        expect(sum(4, 5)).toBe(9);
    });
});