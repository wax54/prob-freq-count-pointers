// add whatever parameters you deem necessary
function separatePositive(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx < rightIdx) {
        const left = arr[leftIdx];
        const right = arr[rightIdx];
        if(left < 0 && right > 0) {
            const temp = arr[leftIdx];
            arr[leftIdx] = arr[rightIdx];
            arr[rightIdx] = temp;
        } else {
            if(left > 0) leftIdx++;
            if(right < 0) rightIdx--;
        }
    }
    return arr;
}
