/**
 * permutation:
 * permutation is the collection of things but order matters
 * given set of n things return n!
 * 
 * @param {number[]} elements 
 * @returns {number [ [] ]}
 */
const permutation = elements => {
  if (!elements.length) return [[]];

  let firstElement = elements[0];
  let restElements = elements.slice(1);

  const permWithoutElements = permutation(restElements);
  const allPermutation = [];

  permWithoutElements.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      allPermutation.push([...perm.slice(0, i), firstElement, ...perm.slice(i)]);
    }
  });

  return allPermutation;
};

console.log(permutation(['a', 'b', 'c']));
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]
