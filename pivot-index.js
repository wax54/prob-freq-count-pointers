// add whatever parameters you deem necessary
//V2
function pivotIndex(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    const goal = sum/2;
    let total = 0;
    let i = 0;
    while((total + (arr[i]/2)) < goal) {
        total += arr[i];
        i++;
    }
    if ((total + (arr[i] / 2)) === goal) return i;
    else return -1;
}

//V1
// function pivotIndex(arr) {
//     console.log('arr', arr);
//     let leftIdx = 0;
//     let rightIdx = arr.length -1;
//     let leftTotal = 0;
//     let rightTotal = 0;

//     while(leftIdx < rightIdx) {
//         console.log('left', leftIdx, 'right', rightIdx);
//         console.log('lTotal', leftTotal,"rTotal",rightTotal);
//         if(rightTotal === leftTotal) {
//             rightTotal += arr[rightIdx];
//             rightIdx--;
//         } else if(rightTotal > leftTotal) {
//             if(arr[leftIdx] >= 0) {
//                 leftTotal += arr[leftIdx];
//                 leftIdx++;
//             }
//             else if(arr[rightIdx] <= 0 ) {
//                 rightTotal += arr[rightIdx];
//                 rightIdx--;
//             }
//             else {
//                 leftTotal += arr[leftIdx];
//                 leftIdx++;
//             }
//         } else {
//             if (arr[rightIdx] >= 0) {
//                 rightTotal += arr[rightIdx];
//                 rightIdx--;
//             }
//             else if (arr[leftIdx] <= 0) {
//                 leftTotal += arr[leftIdx];
//                 leftIdx++;
//             }
//             else {
//                 rightTotal += arr[rightIdx];
//                 rightIdx--;
//             }
//         }
//     }
//     if(leftTotal === rightTotal)
//         return leftIdx;
//     else return -1;
// }
