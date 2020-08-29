function twoNumberSum(array, targetSum) {
	let arrayToReturn = []
	for (let i = 0; i < array.length; i++) {
		let firstNum = array[i];
		for (let j = array.length-1; j >= 0; j--) {
			let secondNum = array[j];
			let total = firstNum + secondNum
			if (total === targetSum && firstNum !== secondNum) {
				arrayToReturn.push(firstNum);
				arrayToReturn.push(secondNum)
				return arrayToReturn;
			}
		}
	}
	return arrayToReturn;
}