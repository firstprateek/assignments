/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let res = 0;
    for (c of str) {
      if (c.toLowerCase().match(/[aeiou]/i)) {
        res += 1;
      }
    }
    return res;
}

module.exports = countVowels;