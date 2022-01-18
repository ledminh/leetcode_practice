//Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    return strs.reduce(longest2, strs[0]);
    
};

const longest2 = (str1, str2) => {
    let longerStr = (str1.length > str2.length)? str1 : str2,
        otherStr = (longerStr === str1)? str2 : str1;

    
    while(longerStr.indexOf(otherStr) !== 0){
        otherStr = otherStr.substring(0, otherStr.length - 1);

    }

    return otherStr;

}