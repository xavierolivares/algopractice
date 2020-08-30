function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        if (arr[left] + arr[right] > 0) {
            right--;
        }
        if (arr[left] + arr[right] < 0) {
            left++;
        }
        if (left === right) {
          return false;
        }
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        }
    }
    return false;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))
console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))