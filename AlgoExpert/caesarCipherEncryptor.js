function caesarCipherEncryptor(string, key) {
    // Write your code here
      
      // value of a, value of c, create a range, lower and upper bound
      // range of 97 - 122 if lowercase letters (a, z)
      // console.log(string.charCodeAt(0));
      // store new string somewhere;
      let cce = [];
      
      // if key is greater or equal to 26, we can modulo by 26.
      if (key >= 26) {
          key = key % 26;
      }
      if (key === 0) {
          return string;
      }
      
      for (let i=0; i < string.length; i++) {
          let unicode = string.charCodeAt(i);
          let diff = unicode + key - 122;
          if (unicode + key > 122) {
              unicode = 96 + diff;
              cce.push(String.fromCharCode(unicode));
          } else {
              cce.push(String.fromCharCode(unicode+key));
          }
      }
      return cce.join("");
  }