// accepts a sorted array, and counts the unique values in the array. There can be negative numbers in teh array, but it always be sorted.

function countUniqueValues(arr) {
    // set pointers through array and store a record of unique values in an object
    // have a count and return at the end of loop
  
    let left = 0;
    let right = arr.length-1;
    let count = 0;
    let uniqueObj = {};
  
    if (arr.length === 0) {
      return 0
    } else if (arr.length === 1) {
      return 1;
    };
  
    while (left < right) {
  
      if (arr[left] === arr[right]) {
        return count;
      }
      if (!(uniqueObj[arr[left]])){
        uniqueObj[arr[left]] = true;
        left++;
        count++;
      } else if (uniqueObj[arr[left]] === true) {
        left++;
      }
      if (!(uniqueObj[arr[right]])){
        uniqueObj[arr[right]] = true;
        right--;
        count++;
      } else if (uniqueObj[arr[left]] === true) {
        right--;
      }
      console.log('left', left, 'right', right)
    }
    return count;
  }
  
  console.log(countUniqueValues([1,1,1,1,1,2])) // 2
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
  console.log(countUniqueValues([])) // 0
  console.log(countUniqueValues([0])) // 1
  console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

  // alternative approach

  function countUniqueValues2(arr) {
    let i = 0;
    let j = 1;
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }

    while (j < arr.length-1) {
        if (arr[i] === arr[j]) {
            j++;
        } 
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        console.log('i pos', i, 'j pos', j, 'i', arr[i], 'j', arr[j])
    }
    return i+1;
}

console.log(countUniqueValues2([1,1,1,1,1,2])) // 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues2([])) // 0
console.log(countUniqueValues2([0])) // 1
console.log(countUniqueValues2([-2,-1,-1,0,1])) // 4