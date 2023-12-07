// A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// A reverseString function that takes a string and returns it reversed.
export function reverseString(str) {
  const reversed = [];
  str.split('').forEach((char) => {
    reversed.unshift(char);
  });
  return reversed.join('');
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
export function calculator() {
  const add = (a, b) => {
    return a + b;
  };
  const sub = (a, b) => {
    return a - b;
  };
  const div = (a, b) => {
    return a / b;
  };
  const mult = (a, b) => {
    return a * b;
  };

  return { add, sub, div, mult };
}

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
export function caesarCipher(str, shift) {
  const isUpperCase = (string) => {
    if (string === string.toUpperCase()) return true;
    else return false;
  };

  const encrypted = [];

  str.split('').forEach((val) => {
    const caseTest = isUpperCase(val);
    val = val.toLowerCase();
    if (val.charCodeAt(0) < 'a'.charCodeAt(0)) {
      // do nothing
    } else if (val.charCodeAt(0) + shift > 'z'.charCodeAt(0))
      val = String.fromCharCode(val.charCodeAt(0) - (26 - shift));
    else val = String.fromCharCode(val.charCodeAt(0) + shift);
    if (caseTest) val = val.toUpperCase();
    encrypted.push(val);
  });

  return encrypted.join('');
}

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
export function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, cur) => sum + cur) / arr.length,
    min: arr.reduce((prev, cur) => Math.min(prev, cur)),
    max: arr.reduce((prev, cur) => Math.max(prev, cur)),
    length: arr.length,
  };
}
