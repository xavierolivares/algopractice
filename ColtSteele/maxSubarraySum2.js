function maxSubarraySum(arr, num) {
    if (num > arr.length || arr.length === 0) {
      return null;
    }
    let windoh = 0;
    let max = -Infinity;
    for (let i = 0; i < num; i++) {
      windoh += arr[i];
    }
    max = windoh;
    for (let j = num; j < arr.length; j++) {
      windoh -= arr[j-num];
      windoh += arr[j];
      if (windoh > max) {
        max = windoh;
      }
    }
    return max;
  }
  
  console.log(maxSubarraySum([100,200,300,400], 2)) //700
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39
  console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5
  console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) //5
  console.log(maxSubarraySum([2,3], 3)) //null