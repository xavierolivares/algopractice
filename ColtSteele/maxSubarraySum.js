function maxSubarraySum(arr, num) {
    let sum = 0;
    let max = -Infinity;

    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length-num; i++) {
        console.log('sumpre', arr[num+i])
        let windowsEnd = num+i;
        sum -= arr[i];
        sum += arr[windowsEnd];
        console.log('sumpost', sum)
        // if (sum > max) {
        //     max = sum;
        // }
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSubarraySum([1,2,3,4,5,5,3,2,3,4,55,3,2], 3))