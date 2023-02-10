/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const hashmapStart = {};
    const hashmapEnd = {};
    
    for (let i = 0; i < paths.length; i++) {
        hashmapStart[paths[i][0]] = 1;
        hashmapEnd[paths[i][1]] = 1;
    }
    
    const array = Object.keys(hashmapEnd);
    for (let i = 0; i < array.length; i++) {
        if (!hashmapStart[array[i]]) return array[i];
    }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.log(destCity([['a', 'z']]))