const randomArr = require('../../helpers/randomArr');

const merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const retArr = [];

	while (retArr.length < arr1.length + arr2.length) {
		if (arr1[i] <= arr2[j] || j === arr2.length) {
			retArr.push(arr1[i++]);
		} else {
			retArr.push(arr2[j++]);
		}
	}

	return retArr;
};

const mergeSort = arr => {
	if (arr.length > 1) {
		const mid = Math.floor(arr.length / 2);
		arr = merge(
			mergeSort(arr.slice(0, mid)),
			mergeSort(arr.slice(mid, arr.length))
		);
	}

	return arr;
};

const myArr = randomArr(true, 20);
console.log(myArr);
console.log(mergeSort(myArr));
