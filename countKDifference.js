/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// NAIVE SOLUTION
var countKDifference = function (nums, k) {
  if (!nums.length) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] - nums[j] === k) count++;
    }
  }
  return count;
};

// var countKDifference = function (nums, k) {
//   let map = {};
//   for (let i of nums) {
//     // console.log(i);
//     map[i] ? map[i]++ : map[i] = 1
//   }
//   // console.log({map})

//   let pairs = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // console.log(i)
//     console.log(map[nums[i] - k])
//     if (map[nums[i] - k]) {
//       pairs += map[nums[i] - k]
//     }
//   }

//   return pairs;

// };


console.log(countKDifference([1, 2, 2, 1], 1)) // 4