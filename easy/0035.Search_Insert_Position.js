/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    return __helper(nums,target, 0, nums.length);
    
    
};

const __helper = (nums, target, start, end) => {
    
    if(start === end) return end;

    let i = Math.floor((end + start)/2);

    
    if(nums[i] < target) {
        return __helper(nums, target, i+1, end);
    }
    else if(nums[i] > target) {
        
        return __helper(nums, target, start, i);
    }
    else {
        return i;
    }
}