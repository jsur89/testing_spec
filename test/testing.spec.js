const { expect } = require("chai");
const wrap = require("../wrap");
const twoSum = require("../twoSum");

describe("twoSum", () => {
  it("If array length is less than 2, return an empty array", () => {
    expect(twoSum([4], 1)).to.eql([]);
  });
});

/*
(1) If less than 2, return empty arr
(2) If there's no possible solution ....return empty arr
(3) The indexes cannot be the same index
*/

describe("wrap", () => {
  xit("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  xit("cannot be undefined", () => {
    expect(wrap("This is a test", 10)).to.not.equal(undefined);
  });
  xit("less than 10", () => {
    const response = wrap("This is a longer test", 10);
    const arr = response.split("\n");
    const lengthGreaterThan10 = arr.filter((item) => item.length > 10).length;
    expect(lengthGreaterThan10).to.equal(0);
    //console.log(lengthGreaterThan10);
  });
});
