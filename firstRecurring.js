/**
 * return first recurring string
 * @param {Sting} s 
 */
const firstRecurring = (s) => {
  if (!s.length) return null;
  let sHeap = {};
  for (let i = 0; i < s.length; i++) {
    if (sHeap[s[i]]) {
      return s[i];
    } else {
      sHeap[s[i]] = 1;
    }
  }
  return null;
};

console.log(firstRecurring('ABCAB')); // A
console.log(firstRecurring('ABC')); // null
console.log(firstRecurring('DBCABA')); // B