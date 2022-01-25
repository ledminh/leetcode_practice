/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let sA = s.trim().split(" ");
    
    
    return sA[sA.length - 1].length;  
};