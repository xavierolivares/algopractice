/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. */

function same(arr1, arr2) {
    var first = arr1.sort();
    var second = arr2.sort();
    var len = second.length;

    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = len-1; i > 0; i--) {
        var sq = first[i] * 2;
        if (sq === second[i]) {
            first.pop();
            second.pop();
        }
    }
    // compare the arrays
    // if a squared number doesnt exist in arr2, return false
    // i need to consider the frequency as well

    // approach is to sort the arrays. and compare values backwards. if the value to sq. values match, pop each array.
    // if the length of each array is 0 by the end, return true. else, return false
}


// examples
same([2,2,2], [4,4,4]) // returns true
same([1], [4]) // returns false
same([1,1,2], [4,1,1]) // returns true
same([1], [])