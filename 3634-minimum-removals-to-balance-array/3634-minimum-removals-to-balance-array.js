/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Elfekra inna 3mlna maxIndex w minIndex lma el-while loop bttksr el-maxIndex bycoon azyad mn el-max value b wa7d f bnbda2 nkarn el=min el-gdeed b el-maxIndex el-7aly elly howa kasr el-while loop w 34an nfs el-sabb mgma3na4 wa7d "maxI - minI" hna 34an e7na aslan azyad mn el=max el7a2e2e b wa7d

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
