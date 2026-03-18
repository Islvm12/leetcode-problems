/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set =  new Set(nums);
        for (let i = 0; i<nums.length; i++){
            if (set.has(target-nums[i])){
                let j = nums.lastIndexOf(target-nums[i])
                if (i !== j){
                    return [i,j];
                }
            }
        }
};