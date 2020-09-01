function areThereDuplicates(...values) {
    let arr1 = [...values]
    let obj1 = {}

    for (let val of arr1) {
      obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val in obj1) {
      if (obj1[val] >= 2) {
        return true
      }
    }
    return false;
}

function pointersSolution(...values) {
    values.sort((a,b) => a > b)
    let start = 0;
    let startplus = 1;

    while (startplus < values.length) {
      if (values[start] === values[startplus]) {
        return true;
      }
      start++;
      startplus++;
    }
    return false;
}


console.log(pointersSolution(1,2,3))
console.log(pointersSolution(1,2,2))
console.log(pointersSolution('a', 'b', 'c', 'a'))