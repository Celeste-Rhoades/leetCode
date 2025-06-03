var twoSum = function (nums, target) {
  const prevNum = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const sum = target - num;

    if (sum in prevNum) {
      return [i, prevNum[sum]];
    }
    prevNum[num] = i;
  }
};
