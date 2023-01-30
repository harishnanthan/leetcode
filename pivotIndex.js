var sumOfArray = function (nums) {
  if (!nums.length) return 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

// MY SOLUTION
var pivotIndex = function (nums) {
  if (!nums.length) return -1;
  for (let i = 0; i < nums.length; i++) {
    let pivotIndex = i;
    let left = nums.slice(0, pivotIndex);
    let right = nums.slice(pivotIndex + 1);
    if (sumOfArray(left) === sumOfArray(right)) return pivotIndex;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])) // 4
console.log(pivotIndex([1, 2, 3])) // -1
console.log(pivotIndex([2, 1, -1])) // 0;


// INTERNET

var pivotIndex = function (nums) {
  if (!nums.length) return -1;
  let rightSum = 0, leftSum = 0;
  nums.forEach(element => rightSum+= element);
  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    rightSum -= currentElement;
    if (rightSum === leftSum) return i;
    leftSum += currentElement;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])) // 4
console.log(pivotIndex([1, 2, 3])) // -1
console.log(pivotIndex([2, 1, -1])) // 0;