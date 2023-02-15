/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  return nums.map(a=>nums[a]);
};

console.log(buildArray([0,2,1,5,3,4])) // [0,1,2,4,5,3]