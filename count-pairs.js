// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;
    const seeking = new Set();
    for(let num of arr) {
        if(seeking.has(num)) count++;
        else {
            //still searching for it's partner
            const remainder = target - num;
            seeking.add(remainder);
        }
    }
    return count;
}
