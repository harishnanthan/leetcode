/**
 * combination:
 * a collection of things where the order does not matter.
 * given the set of n things, there are 2^n possible combinations
 *
 * @param {number[]} elements 
 * @returns {number[ [] ]}
 */
const combinations = (elements) => {
  if (!elements.length) return [[]];

  let firstElement = elements[0];
  let restElements = elements.splice(1);

  const combsWithoutFirstElement = combinations(restElements);
  const combsWithFirstElement = [];

  combsWithoutFirstElement.forEach(comb => {
    combsWithFirstElement.push([...comb, firstElement])
  })

  return [...combsWithoutFirstElement, ...combsWithFirstElement];

};

console.log(combinations([1, 2, 3]));
// [
//   [],       [ 3 ],
//   [ 2 ],    [ 3, 2 ],
//   [ 1 ],    [ 3, 1 ],
//   [ 2, 1 ], [ 3, 2, 1 ]
// ]
