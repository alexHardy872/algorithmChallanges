const convert = require("../lib/rgbToHexConverter");

describe('change from rgb value to hexidecimal', () => {

it('should return string', () => {
let result = convert(0, 0, 0);
expect(typeof result).toEqual('string');
});

it('should return zeros', () => {
let result = convert(0, 0, 0);
expect(result).toEqual('000000');
});

it('should return zeros', () => {
let result = convert(1, 2, 3);
expect(result).toEqual('010203');
});

it('should return an empty string', () => {
let result = convert(255, 255, 255);
expect(result).toEqual('FFFFFF');
});

it('should return an empty string', () => {
let result = convert(255, 255, 300);
expect(result).toEqual('FFFFFF');
});

it('should return an empty string', () => {
let result = convert(148, 0, 211);
expect(result).toEqual('9400D3');
});
    






});

