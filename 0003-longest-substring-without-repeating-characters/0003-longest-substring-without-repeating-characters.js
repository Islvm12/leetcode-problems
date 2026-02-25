/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let slow = 0;
    let maxLength = 0;

    for (let fast = 0; fast < s.length; fast++) {
        let chunk = s.slice(slow, fast);

        if (chunk.includes(s[fast])) {
            slow = slow + chunk.indexOf(s[fast]) + 1;
        }

        maxLength = Math.max(maxLength, fast - slow + 1);
    }

    return maxLength;
};