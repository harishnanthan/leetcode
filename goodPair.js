/**
 * @param {number[]} nums
 * @return {number}
 */
// NAIVE
var numIdenticalPairs = function (nums) {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairs++;
      }
    }
  }
  return pairs;
};

// var numIdenticalPairs = function (nums) {
//   let pairsHash = {}, count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     pairsHash[nums[i]] = pairsHash[nums[i]] ? pairsHash[nums[i]] + 1 : 1
//   }
//   console.log()
//   return count;
// };

console.log(numIdenticalPairs([1, 1, 1, 1])) // 6
console.log(numIdenticalPairs([1,2,3,1,1,3])) // 4