/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (!str) {
    return true;
  }

  const strArray = str.split('').map(c => c.toLowerCase());
  let start = 0;
  let end = strArray.length - 1;

  while (start < end) {
    if (!strArray[start].match(/[a-z]/i)) {
      start += 1;
      continue;
    }

    if (!strArray[end].match(/[a-z]/i)) {
      end -= 1;
      continue;
    }

    if (strArray[start] !== strArray[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  
  return true;
}

module.exports = isPalindrome;
