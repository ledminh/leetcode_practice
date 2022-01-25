/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if(x < 2) return x;

    let i = 1, end = Math.floor(x/2);

    while(i*i < x) {
        i++;
    }
    

    return (i*i === x)? i : i - 1;
    
};

