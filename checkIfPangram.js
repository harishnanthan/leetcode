/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const h = {};
  for (let i = 0; i < sentence.length; i++) {
    h[sentence[i]] = (h[sentence[i]] || 0) + 1;
  }
  const keys = Object.keys(h);
  return keys.length === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')) // true