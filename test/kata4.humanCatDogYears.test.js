const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    test('returns human years with converted cat and dog years', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
});
// Look Ma, no handlebars!!!
