/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hash = {};
    let buckets = Array.from({ length: nums.length + 1 }, () => []);
    let result = []
    for (let num of nums) {
        hash[num] = (hash[num] || 0) + 1
    };
    for (let key in hash) {
        let freq = hash[key];
        buckets[freq].push(Number(key))
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            for (let num of buckets[i]) {
                result.push(num)
            }
            if (result.length === k) {
                return result
            }
        }
    }
};