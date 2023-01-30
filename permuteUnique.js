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

/**
 * unique permutation
 * using the hash map for get an unique elements from an array
 * @param {number[]} elements 
 * 
 */

const permuteUnique = elements => {
  const allPermutation = permutation(elements);
  const uniquePermutationHash = {};

  for (let i = 0; i < allPermutation.length; i++) {
    uniquePermutationHash[allPermutation[i]] = allPermutation[i];
  }

  return Object.values(uniquePermutationHash);
}

console.log(permuteUnique(['a', 'b', 'c']));
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]
// ]

console.log(permuteUnique([1, 1, 2]));
// [ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]
