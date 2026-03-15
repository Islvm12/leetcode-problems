/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let pointer = needle.length;
    let haySize = haystack.length;

    if (pointer > haySize) return -1;

    for (let i = 0; i < haySize - pointer + 1; i++) {
        if (haystack.slice(i, i + pointer) === needle) {
            return i;
        }
    }
    return -1;
};