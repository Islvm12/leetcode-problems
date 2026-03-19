/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let str of strs) {
        let count = new Array(26).fill(0)
        for (let char of str) {
            let charIndex = char.charCodeAt(0) - 97;
            count[charIndex] += 1
        }
        let key = count.join(",")
        map[key] ? map[key].push(str) : map[key] = [str]
    }
    return Object.values(map)
};