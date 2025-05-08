/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let previousNums = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in previousNums) return [i, previousNums[complement]];
    previousNums[num] = i;
  }
};
function isAnagram(str1, str2) {
  let word = {};
  for (let char of str1) {
    if (!(char in word)) {
      word[char] = 0;
    }
    word[char] += 1;
  }
  for (let char of str2) {
    if (char in word) {
      word[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in word) {
    if (word[char] !== 0) {
      return false;
    }
  }
  return true;
}
