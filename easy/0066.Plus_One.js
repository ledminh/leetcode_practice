/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let result = [], mem = 0;

    let curr = digits[digits.length - 1] + 1;

    if(curr >= 10){
        curr = 0;
        mem = 1;
    }

    result.unshift(curr);

    let i = digits.length - 2;

    while(i >=0){
        curr = digits[i] + mem;

        if(curr >= 10) {
            curr = 0;
            mem = 1;
        }
        else{
            mem = 0;
        }

        i--;


        result.unshift(curr);
    }

    if(mem === 1) result.unshift(1);

    return result;
};
