function sameFrequency(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()
    let obj1 = {}
    let obj2 = {}
    for (let val of str1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for (let val of str2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for (let val in obj1) {
      // if keys match in both obj1 and obj2
      if (!(val in obj2)) {
        return false
      }
      // if frequency matches in both objs
      if (obj1[val] !== obj2[val]) {
        return false
      }
    }
    return true;
}

console.log(sameFrequency(182, 281)) //t
console.log(sameFrequency(34, 14)) //f
console.log(sameFrequency(3589578, 5879385)) //t
console.log(sameFrequency(22, 222)) //f