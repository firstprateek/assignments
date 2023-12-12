/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const count = {};
  str1.split('').forEach(l => {
    l = l.toLowerCase();
    count[l] = (count[l] || 0) + 1 
  });
  str2.split('').forEach(l => {
    l = l.toLowerCase();
    count[l] = (count[l] || 0) - 1;
    if (count[l] == 0) {
      delete count[l];
    }
  });
  return Object.keys(count).length == 0;
}

module.exports = isAnagram;
