function isPalindrome(string) {
    // Write your code here.
      let i = 0;
      let j = string.length-1;
      
      if (string.length === 1) {
          return true;
      }
      
      // utilize <= with pointers to auto-break at string's centerpoint
      // less than handles even scenarios
      // equal handles odd scenarios
      
      while (i <= j) {		
          // if str[i] and str[j] doesn't match, return false
          // str[0], str[str.length-1]
          if (string[i] !== string[j]) {
              return false;
          }
          i++;
          j--;
      }
      return true;
      // return true if we've gone through entire palindrome
  }