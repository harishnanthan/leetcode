/**
 * 1480. Running Sum of 1d Array
 * @param {number[]} nums
 * @return {number[]}
 */

// MY SOLUTION
var runningSum = function (nums) {
  if (!nums.length) return [];
  const runningSum = [];
  let sum = 0;
  nums.forEach(num => {
    sum += num
    runningSum.push(sum);
  })
  return runningSum;
};

console.log(runningSum([1, 1, 1, 1]));
// [ 1, 2, 3, 4 ]

// INTERNET SOLUTION

var runningSum = function (nums) {
  if (!nums.length) return [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};

console.log(runningSum([1, 1, 1, 1]));
// [ 1, 2, 3, 4 ]
