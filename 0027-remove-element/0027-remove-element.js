/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer = nums.length-1
    let memory
    let arr = nums.filter((e)=> e !== val)
    for(let i=0; i<arr.length; i++){
        while (nums[pointer] === val) {
        pointer-=1
        }
        memory=nums[pointer]
        if(nums[i] === val){
            nums[pointer] = nums[i]
            nums[i] = memory
        }
    }
    return arr.length
};