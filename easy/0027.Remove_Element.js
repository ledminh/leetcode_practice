/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0, j = 0;

    while(j < nums.length){
        if(nums[j] === val){
            j++;
        }
        else {
            nums[i] = nums[j];
            i++;
            j++;
        }
    }

    return i + 1;
};

// OR

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0;
     
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
     
    return i;
};