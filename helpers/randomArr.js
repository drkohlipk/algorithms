module.exports = (isInts, maxLength = 100) => {
	const len = Math.floor(Math.random() * maxLength);
	const retArr = [];

	for (let i = 0; i < len; i++) {
		const val = isInts ? Math.floor(Math.random() * len) : Math.random() * len;

		retArr.push(val);
	}

	return retArr;
};
