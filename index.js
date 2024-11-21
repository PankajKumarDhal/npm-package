// index.js
/**
 * Binary Search Function
 * @param {Array} sortedArray - Array sorted in ascending order
 * @param {Number} target - Element to find
 * @returns {Number} Index of the target, or -1 if not found
 */
function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Not found
}

module.exports = binarySearch;
