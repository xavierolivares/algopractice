/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */

// Initial thoughts: the strings have to be the same length.

function validAnagram(str1, str2) {
    //kill switch if str lengths dont match
    if (str1.length !== str2.length) {
        return false;
    }

    let freqCt1 = {};
    let freqCt2 = {};

    for (let val of str1) {
        freqCt1[val] = (freqCt1[val] || 0) + 1;
    }
    for (let val of str2) {
        freqCt2[val] = (freqCt2[val] || 0) + 1;
    }
    
    for (let key in freqCt1) {
      // if obj1 key doesnt exist in obj2
      if (!(key in freqCt2)) {
        return false;
      }
      // if freq of str characters dont match
      if (freqCt1[key] !== freqCt2[key]) {
        return false
      }
    }
    return true;
}


console.log(validAnagram('', '')) //true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('awesome', 'awesom')) //false
console.log(validAnagram('qwerty', 'qeywrt')) //true
console.log(validAnagram('texttwisttime', 'timetwisttext')) //true