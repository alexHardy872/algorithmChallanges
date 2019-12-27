const inputString = require("../lib/backspaces");

describe('backspaces in the string', () => {

it('should return a string', () => {
let result = inputString('abac');
expect(typeof result).toEqual('string');
});

it('should return a string', () => {
let result = inputString('');
expect(result).toEqual('');
});

it('returns an empty string from just ###', () => {
let result_one = inputString('#######');
let result_two = inputString('#');
expect(result_one).toEqual('');
expect(result_two).toEqual('');
});

it('returns empty string with a letter and a hastag', () => {
let result_one = inputString('a#');
let result_two = inputString('abc###');
expect(result_one).toEqual('');
expect(result_two).toEqual('');
});

it('should return a string', () => {
    let result = inputString('abc##bc');
    expect(result).toEqual('abc');
    });



});