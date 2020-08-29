function threeNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b) => a-b);
      let tripNums = [];
  
      for (let i = 0; i < array.length-2; i++) {
          let left = i+1;
          let right = array.length-1;
          while (left < right) {
              let currSum = array[i] + array[left] + array[right];
              if (currSum === targetSum) {
                  tripNums.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              } else if (currSum > targetSum) {
                  right--;
              } else if (currSum < targetSum) {
                  left++;
              }
          }
      }
      return tripNums;
  }