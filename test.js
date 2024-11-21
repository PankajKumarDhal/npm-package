const binarySearch = require('./index');

const sortedArray = [1, 2, 3, 4, 5, 6];
const target = 4;

const result = binarySearch(sortedArray, target);
console.log(`Index of ${target}:`, result); // Should print: Index of 4: 3
