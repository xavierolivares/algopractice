function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
    return false;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))
console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

// improvements would be to set a variable of sum and check for its value, keep the > or < if statements but within elseif logic