/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let h = {}, count = 0;
  for (let i = 0; i < stones.length; i++) {
    h[stones[i]] = (h[stones[i]] || 0) + 1
  }
  for (let i = 0; i < jewels.length; i++) {
    count += (h[jewels[i]] || 0);
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3
console.log(numJewelsInStones("z", "ZZ")) // 3