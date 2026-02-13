/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = strs[0]
    let prefixFound = 0

    function loop(arr) {
        for (let i = 0; i < strs.length; i++) {
            arr[i].slice(0,prefix.length).includes(prefix) ? prefixFound += 1 : "";
        }
        if (prefixFound === strs.length) {
            return prefix;
        } else if (prefix.length === 1) {
            return prefix="";
        } else {
            prefix = prefix.slice(0, -1)
            prefixFound=0
            loop(strs);
        }
    }
    loop(strs)
    return prefix;
};