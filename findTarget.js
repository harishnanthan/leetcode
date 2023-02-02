/**
 * this one is not perfectly finished.
 * @param {number[]} s 
 * @param {number[]} t
 * @param {number} target 
 */

// DIFFERENT BRUTE FORCE SOLUTION
const findTarget = (s, t, target) => {
  if (target === 0) return findTarget(s, t, target + 1)
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      let currentSum = s[i] + t[j];
      if (target === currentSum) {
        return [s[i], t[j]]
      }
    }
  }
  return findTarget(s, t, target - 1);
};

console.log(findTarget([1, 2, 3, 6, 9], [20, 5, 20, 10, 5, 20], 24));