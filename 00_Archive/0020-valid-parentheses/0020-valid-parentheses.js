/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const parentheses = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    let stack = [];
    for (let char of s) {
        if (parentheses[char]) {
            stack.push(char)
        } else if (parentheses[stack.at(-1)] === char) {
            stack.pop()
        } else return false
    }
    return stack.length === 0;
};