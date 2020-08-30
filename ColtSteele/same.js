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

// examples
console.log(same([2,2,2], [4,4,4])) // returns true
console.log(same([1], [4])) // returns false
console.log(same([1,1,2], [4,1,1])) // returns true
console.log(same([1], [])) // returns false