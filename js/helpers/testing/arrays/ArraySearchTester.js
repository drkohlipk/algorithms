const chalk = require('chalk');
const randomArr = require('../../randomArr');

class ArraySearchTester {
	constructor(searchMethod) {
		this.searchMethod = searchMethod;

		this.testSearch();
	}

	testSearch() {
		let numFailures = 0;
		const arrayToSearch = randomArr(true, 1000).sort((a, b) => a - b);

		for (let i = 0; i < 1000; i++) {
			const randVal = Math.floor(1000 * Math.random());

			if (
				this.searchMethod(arrayToSearch, randVal) !==
				(arrayToSearch.indexOf(randVal) !== -1)
			) {
				numFailures++;
			}
		}

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
}

module.exports = ArraySearchTester;
