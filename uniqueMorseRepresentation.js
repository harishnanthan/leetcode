/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const moreseArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const h = {};
  words.forEach(word => {
    let val = '';
    for (let i = 0; i < word.length; i++) {
      let code = word[i].charCodeAt() - 97;
      val += moreseArr[code];
    }
    h[val] = word;
  })
  return Object.keys(h).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
console.log(uniqueMorseRepresentations(["a"])); // 1