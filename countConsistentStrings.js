/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let countArr = [];
    words.forEach(word => {
      let h = {};
      for (let i = 0; i < word.length; i++) {
        h[word[i]] = (h[word[i]] || 0) + 1;        
      }
      countArr.push(Object.keys(h));
    })
    console.log(countArr);
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))