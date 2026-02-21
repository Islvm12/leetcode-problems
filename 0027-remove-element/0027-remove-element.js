/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// the idea: "K" looks for the "val" and stops at it then it well be replaced with the first "non-val" item that "i" find

var removeElement = function(nums, val) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        console.log(nums)
    }

    return k;
};