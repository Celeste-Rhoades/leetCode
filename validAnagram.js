// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(str1, str2) {
  // are the strings the same length? if yes return false.
  if (str1.length !== str2.length) return false;

  // split string into an array
  // sort
  // join the array back together as a string
  const newStr1 = str1.split("").sort().join("");

  // repeat with second word
  const newStr2 = str2.split("").sort().join("");

  // are the two words equal? true or false
  return newStr1 === newStr2;
}
