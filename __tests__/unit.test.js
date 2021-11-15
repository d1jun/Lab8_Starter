// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('10 digit with dashes is valid', () => {
    expect(functions.isPhoneNumber('310-310-3100')).toBe(true);
  });
test('10 digit without dashes is invalid', () => {
    expect(functions.isPhoneNumber('3103103100')).toBe(false);
  });  
test('letter is invalid', () => {
    expect(functions.isPhoneNumber('e')).toBe(false);
  });
test('7 digit with dashes is valid', () => {
    expect(functions.isPhoneNumber('310-3100')).toBe(true);
  });

test('4 letter top level domain is invalid', () => {
    expect(functions.isEmail('cox@cox.coms')).toBe(false);
  });
test('3 letter tld is valid', () => {
    expect(functions.isEmail('cox@cox.net')).toBe(true);
  });
test('2 letter tld is valid', () => {
    expect(functions.isEmail('cox@cox.ne')).toBe(true);
  });
test('1 letter tld is invalid', () => {
    expect(functions.isEmail('cox@cox.n')).toBe(false);
  });

test('3 letter password is invalid', () => {
    expect(functions.isStrongPassword('aaa')).toBe(false);
  });
test('16 letter password is invalid', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaaaaaaa')).toBe(false);
  });
test('15 letter password is valid', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaaaaaa')).toBe(true);
  });
test('letter number underscore password is valid', () => {
    expect(functions.isStrongPassword('abc123_')).toBe(true);
  });

test('0th month and day is valid', () => {
    expect(functions.isDate('0/0/2000')).toBe(true);
  });
test('2 digit month and 1 digit day is valid', () => {
    expect(functions.isDate('10/1/2000')).toBe(true);
  });
test('3 digit year is invalid', () => {
    expect(functions.isDate('10/1/200')).toBe(false);
  });
test('word format is invalid', () => {
    expect(functions.isDate('March 3 2020')).toBe(false);
  });

test('empty string is invalid', () => {
    expect(functions.isHexColor('')).toBe(false);
  });
test('#xxx is valid', () => {
    expect(functions.isHexColor('#abc')).toBe(true);
  });
test('xxx is valid', () => {
    expect(functions.isHexColor('abc')).toBe(true);
  });
test('4 characters is invalid', () => {
    expect(functions.isHexColor('1234')).toBe(false);
  });  
