/**
 * 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */

// brute-force!
const maxProfitBF = (prices) => {
  // if prices has an empty array return 0;
  if (!prices.length) return 0;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = prices[j] - prices[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  return maxProfit;
};

console.log(maxProfitBF([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfitBF([7, 6, 4, 3, 1])) // 0

// two - pointers

const maxProfit = (prices) => {
  let left = 0, right = 1, maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let currentProfit = prices[right] - prices[left];
      maxProfit = Math.max(currentProfit, maxProfit);
    }
    else left = right;
    right++;
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0