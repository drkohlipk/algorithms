const chalk = require('chalk');
const randomArr = require('../../randomArr');

class ArraySortTester {
	constructor(sortMethod, isInPlace) {
		this.isInPlace = isInPlace;
		this.sortMethod = sortMethod;

		this.testSort();
	}

	testSort() {
		let numFailures = 0;
		const arrayToSort = randomArr(true, 100000);
		let sortedArr = [...arrayToSort];

		sortedArr = this.sortMethod(sortedArr);

		numFailures += this.testContents(arrayToSort, sortedArr);
		numFailures += this.testSorted(sortedArr);

		if (numFailures) {
			console.log(
				chalk.red(
					`Sorry, you had ${numFailures} failure${
						numFailures > 1 ? 's' : ''
					}! 😭`
				)
			);
			return;
		}

		console.log(chalk.green(`🎉  Congrats!  All tests passed! 🎉`));
	}

	testContents(beforeSort, afterSort) {
		const contentObj = {};
		let numFailures = 0;

		if (beforeSort.length !== afterSort.length) numFailures++;

		for (let i = 0; i < beforeSort.length; i++) {
			contentObj[beforeSort[i]] = (contentObj[beforeSort[i]] || 0) + 1;
		}

		for (let i = 0; i < afterSort.length; i++) {
			if (contentObj[afterSort[i]]) {
				contentObj[afterSort[i]]--;

				if (contentObj[afterSort[i]] === 0) delete contentObj[afterSort[i]];
			} else numFailures++;
		}

		if (Object.keys(contentObj).length) numFailures++;

		return numFailures;
	}

	testSorted(sortedArr) {
		let numFailures = 0;

		for (let i = 1; i < sortedArr.length; i++) {
			if (sortedArr[i] < sortedArr[i - 1]) numFailures++;
		}

		return numFailures;
	}
}

module.exports = ArraySortTester;
