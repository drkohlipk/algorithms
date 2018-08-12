const randomArr = require('../../helpers/randomArr');

const merge = (arr1, arr2) => {
	const mergedArr = [];
	let i = 0;
	let j = 0;

	while (mergedArr.length < arr1.length + arr2.length) {
		if (arr1[i] <= arr2[j] || j >= arr2.length) {
			mergedArr.push(arr1[i++]);
		} else {
			mergedArr.push(arr2[j++]);
		}
	}

	return mergedArr;
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

module.exports = mergeSort;
