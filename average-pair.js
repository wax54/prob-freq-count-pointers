// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx < rightIdx) {
        const num1 = arr[leftIdx];
        const num2 = arr[rightIdx];
        const avg = (num1 + num2)/2;
        if(avg === target) return true;
        else if(avg < target) leftIdx++;
        else                    rightIdx--;
    }
    return false;

}
