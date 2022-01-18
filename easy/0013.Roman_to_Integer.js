//Roman to Int
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const transValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let number = 0, i = 0;

    while(i < s.length) {
        if(i === s.length  - 1){
            number += transValues[s[i]];
            i++;
        }
        else if(transValues[s[i]] >= transValues[s[i + 1]]){
            number += transValues[s[i]];
            i++;
        }
        else {
            number += (transValues[s[i + 1]] - transValues[s[i]]);
            i += 2;

        }


    }


    return number;



};