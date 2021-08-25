// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    function freqCount(str) {
        const result = new Map();
        for (let letter of str) {
            const occurances = result.get(letter);
            if (occurances) result.set(letter, occurances + 1);
            else result.set(letter, 1);
        }
        return result;
    }
    const num1Freq = freqCount(num1 + '');
    const num2Freq = freqCount(num2 + '');
    if(num1Freq.size !== num2Freq.size) return false;
    for(let num of num1Freq.keys()){
        if(num1Freq.get(num) !== num2Freq.get(num)) return false;
    }
    return true;
}

