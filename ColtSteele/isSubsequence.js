function isSubsequence(target, string) {
    //goal is to check if counter matches target.length
    let i = 0;
    let len = 0;
  
    for (let j = len; j < string.length; j++) {
      let match = string[j];
      if (target[i] === match) {
        i++;
      }
      if (i === target.length) {
        return true;
      }
    }
    // return false default statement
    return false;
  }
  
  console.log(isSubsequence('hello','hello world')) // true
  console.log(isSubsequence('sing','sting')) // true
  console.log(isSubsequence('abc','abracadabra')) // true
  console.log(isSubsequence('abc','acb')) // false (order matters)