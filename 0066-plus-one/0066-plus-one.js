/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // بنحولها لـ BigInt وبنزود 1n (حرف الـ n معناه إن الرقم ده BigInt)
    let num = BigInt(digits.join("")) + 1n;
    // نرجعها String وبعدين Array
    return Array.from(String(num), Number);
};