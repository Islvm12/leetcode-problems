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
    for (let i = 0; i < s.length; i++) {
        if (Object.keys(parentheses).includes(s[i])) {
            stack = [...stack, s[i]]
        } else if (parentheses[stack.at(-1)] === s[i]) {
            stack = stack.slice(0, -1)
        } else return false
    }
    return !(Object.values(parentheses).includes(s[0])) && stack.length === 0;
};