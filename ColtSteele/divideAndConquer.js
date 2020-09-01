function divideAndConquer(arr, value) {
    let min = 0;
    let max = arr.length-1;

    while (min <= max) {
        let middle = Math.floor((min+max)/2);

        if (value > arr[middle]) {
            min = middle + 1;
        } else if (value < arr[middle]) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

//return index of value if it exists in sorted array using divide and conquer. if it doesnt exist, return 0;

console.log(divideAndConquer([1,2,3,4,5,6],4));
console.log(divideAndConquer([1,2,3,4,5,6],3));
console.log(divideAndConquer([11,22,33,44], 55));
console.log(divideAndConquer([1], 1));