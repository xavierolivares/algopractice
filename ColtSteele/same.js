function same(arr1, arr2) {
    var first = arr1.sort();
    var second = arr2.sort();
    var len = second.length;
    var count = 0;
    console.log('first', first)
    console.log('second', second)
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < len; i++) {
        var sq = first[i] * first[i];
        if (sq === second[i]) {
          count++;
        }
    }
    console.log('count', count)
    if (first.length === count) return true;
    return false;
    // compare the arrays
    // if a squared number doesnt exist in arr2, return false
    // i need to consider the frequency as well

    // approach is to sort the arrays. and compare values backwards. if the value to sq. values match, pop each array.
    // if the length of each array is 0 by the end, return true. else, return false
}

function same2(arr1, arr2) {

    if (arr1.length !== arr2.length) {
      return false
    };
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    console.log('1', freqCounter1);
    console.log('2', freqCounter2);

    for (let key in freqCounter1) {
      // if corresponding sq. key doesn't exist in obj2
      if (!(key ** 2 in freqCounter2)) {
        // console.log('this runs?')
        return false;
      }
      // if frequency of key/values dont match
      if (freqCounter1[key] !== freqCounter2[key**2]) {
        // console.log('this 2 runs?')
        return false;
      }
    }

    // return true if both objs match
    return true;
}

// examples
console.log(same([2,2,2], [4,4,4])) // returns true
console.log(same([1], [4])) // returns false
console.log(same([1,1,2], [4,1,1])) // returns true
console.log(same([1], [])) // returns false