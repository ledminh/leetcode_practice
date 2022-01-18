//Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const brakets = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            brakets.push(s[i]);
        }
        else{
            if(s[i] === ")"){
                if(brakets[brakets.length - 1] === "(")
                    brakets = brakets.pop();
                else return false;
            }

            if(s[i] === "]"){
                if(brakets[brakets.length - 1] === "[")
                    brakets = brakets.pop();
                else return false;
            }

            if(s[i] === "}"){
                if(brakets[brakets.length - 1] === "{")
                    brakets = brakets.pop();
                else return false;
            }

        }
    }
    
    return brakets.length === 0;
};
