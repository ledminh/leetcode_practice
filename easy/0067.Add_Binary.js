/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let maxLength = (a.length > b.length)? a.length : b.length;

    let result = "";
    let i = 1, dA = 0, dB = 0, curr = 0, mem = 0;
    
    while(i <= maxLength) {
        dA = (a[a.length - i])? toDigit(a[a.length - i]) : 0;
        dB = (b[b.length - i])? toDigit(b[b.length - i]) : 0;

        curr  = (dA + dB + mem)%2,
        mem = Math.floor((dA + dB + mem)/2);

        result = curr + result;

        i++;

    }

    if(mem) result = mem + result;

    return result;
};

const toDigit = (c) => c.charAt(0) - '0';
