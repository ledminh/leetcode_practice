/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === "") return 0;

    let iH = 0, iN = 0, index = 0, found = false;

    while(!found && iH < haystack.length) {
        if(haystack[iH] === needle[iN]){
            index = iH;

            while(iN < needle.length && haystack[iH] === needle[iN]){
                iH++;
                iN++;

            }

            
            if(iN === needle.length) found = true;
            else {
                iN = 0;
                iH = index + 1;
            }
        }
        else {
            iH++;
        }
    }

    if(found) return index;
    else return -1;
};