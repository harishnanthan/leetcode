/**
 * @param {number[]} nums
 * @return {number[]}
 */

// NAIVE SOLUTION
// var smallerNumbersThanCurrent = function (nums) {
//   if (!nums.length) return 0;
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         count++;
//       }
//     }
//     arr.push(count)
//   }
//   return arr;
// };

// HASH MAP
var smallerNumbersThanCurrent = function (nums) {
  if (!nums.length) return 0;
  const h = new Map();
  const sortedNums = nums.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    h.has(sortedNums[i]) ? null : h.set(sortedNums[i], i);
  }
  return nums.map(el => h.get(el));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])) // [ 4, 0, 1, 1, 3 ]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])) // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])) // [0, 0, 0, 0]