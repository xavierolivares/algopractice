function averagePair(arr, val) {
    var i = 0;
    var j = arr.length-1;

    if (arr.length < 2) {
      return false;
    }
    while (i < j) {
      var avg = (arr[i] + arr[j]) / 2;
      if (avg === val) {
        return true;
      }
      if (avg < val) {
        i++;
      }
      if (avg > val) {
        j--;
      }
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false