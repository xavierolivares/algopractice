// O(n*m) time 
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      let lowDiffVal1 = 0;
      let lowDiffVal2 = 0;
      let lowestDiff = Infinity;
  
      for (let i=0; i < arrayOne.length; i++) {
          for (let j=0; j < arrayTwo.length; j++) {
              val1 = arrayOne[i];
              val2 = arrayTwo[j];
              let absDiff = Math.abs(val1-val2);
              
              if (absDiff < lowestDiff) {
                  lowestDiff = absDiff;
                  lowDiffVal1 = val1;
                  lowDiffVal2 = val2;
              }
              if (absDiff === 0) {
                  return [val1, val2];
              }
          }
      }
      return [lowDiffVal1, lowDiffVal2];
  }