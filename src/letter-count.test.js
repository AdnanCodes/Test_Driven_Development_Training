import { expect } from "chai";
import { getLetterCount } from "./letter-count";

describe("getLetterCount - basic functionaility", () => {
  it("returns an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });
  it("return the correct letter count for a word for with only one for each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });
  it("returns the corret letter ocunt for workds with more than of one certain letter", () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount("mississippi");
    expect(actual).to.deep.equal(expected);
  });
});
