/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
  nums.sort((a, b) => a - b);

  let maxWindow = 0;
  let maxI = 0;

  for (let minI = 0; minI < nums.length; minI++) {
    while (maxI < nums.length && nums[maxI] <= nums[minI] * k) {
      maxI++;
    }
    maxWindow = Math.max(maxWindow, maxI - minI);
  }

  return nums.length - maxWindow;
}
