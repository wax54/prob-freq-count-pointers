// add whatever parameters you deem necessary
function longestFall(arr) {
    let count = 0;
    return arr.reduce((acc, num, i) => {
        //if we are still falling
        if(num < arr[i - 1]) count++;
        else count = 1;
        return Math.max(count, acc);
    }, 0)
}
