// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {

    if(str1.length > str2.length) return false;
    let checkIdx = 0;
    for(let char of str2) {
        if(char === str1[checkIdx]){
            checkIdx++;
            if(checkIdx === str1.length){
                return true;
            }
        }
    }
    return false;
}
