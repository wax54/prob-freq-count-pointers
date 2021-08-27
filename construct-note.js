// add whatever parameters you deem necessary
function constructNote(note, letters) {
    function freqCount(str) {
        const result = {};
        for (let letter of str) {
            result[letter] ? result[letter]++ : result[letter] = 1;
        }
        return result;
    }
    const noteLetterFreq = freqCount(note);
    const lettersFreq = freqCount(letters);

    for(let letter in noteLetterFreq) {
        if(!lettersFreq[letter]) return false;
        if(lettersFreq[letter] < noteLetterFreq[letter]) return false;
    }
    return true;
}
