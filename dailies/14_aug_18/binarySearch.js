const quickSort = require('./quickSort');
const randomArr = require('../../helpers/randomArr');

const binarySearch = (arr, x) => {
	let begIdx = 0;
	let endIdx = arr.length - 1;

	while (begIdx <= endIdx) {
		const mid = Math.floor((endIdx - begIdx) / 2) + begIdx;

		if (arr[mid] === x) return true;

		if (arr[mid] < x) {
			begIdx = mid + 1;
		} else {
			endIdx = mid - 1;
		}
	}

	return false;
};

console.log('********************* binarySearch *********************');
const myArr = randomArr(true, 20);
quickSort(myArr);
console.log(myArr);
console.log(binarySearch(myArr, 1));
console.log('********************* binarySearch *********************');
