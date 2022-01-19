/**
 * @param {number[]} nums
 * @return {number}
 */
// This solution encounters excess time error.
var maxSubArray = function(nums) {
    let max = -Infinity;

    for(let i = 0; i < nums.length; i++){
        let total = 0;
        for(let j = i; i < nums.length; j++){
            total += nums[j];

            if(total > max){
                max = total;
            }
        }
    }

    return max;
};

// OR
// This solution is from leetcode
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let total = nums[0],
        max = nums[0];
     
     for(let i = 1; i < nums.length; i++) {
         total = Math.max(nums[i], total + nums[i]);
         max = Math.max(max, total);
     }
     
     return max;
 
 };