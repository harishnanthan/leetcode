/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const h = {};
  for (let i in heights) {
    h[heights[i]] = names[i];
  }
  return Object.values(h).reverse();
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // [ 'Mary', 'Emma', 'John' ]

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // [ 'Bob', 'Alice', 'Bob' ]