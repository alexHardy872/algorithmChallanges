const longest = require("../lib/alphabeticalSubstring");

describe('longest substring in order', () => {

it('should return an empty string', () => {
let result = longest('');
expect(typeof result).toEqual('string');
});

it('should return full order string', () => {
let result = longest('abc');
let result_two = longest('aabbcc');
expect(result).toEqual('abc');
expect(result_two).toEqual('aabbcc');
});

it('should return single letter substring', () => {
let result = longest('cba');
expect(result).toEqual('c');
});



it('should return correct', () => {
let result = longest('asdfaaaabbbbcttavvfffffdf');
expect(result).toEqual('aaaabbbbctt');
});



});