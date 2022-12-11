const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns yes if true and no if false', () => {
    expect(booleanToWord(true)).toEqual("Yes");
    expect(booleanToWord(false)).toEqual("No");
  });
});
