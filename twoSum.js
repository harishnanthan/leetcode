/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// HASH METHOD

var twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

// console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([2, 4, 11, 7, 15], 9)); // [0, 1]