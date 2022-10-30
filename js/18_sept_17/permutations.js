// "aba"-> ab -> ba -> b -> baa
// "aab"
// "baa"
// "aba"

// "cab" -> getPermutations("ca") -> "ca" + "b" | "ac" + "b"

// cab -> ca -> c -> 

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    
    return arr;
}

const explorePermutations = (arr, handler) => {

    const getPermutations = (arr, end) => {
		if (end == 0) {
			handler(arr);
			return;
		}

		for (let i = 0; i < end; i++) {
			swap(arr, i, end-1);
			getPermutations(arr, end-1);
			swap(arr, i, end-1);
		}
	}
	
	getPermutations(arr, arr.length);
}

const printPermutations = (arr) => explorePermutations(arr, console.log);
const getPermutations = (arr) => {
	let collection = [];
	explorePermutations(arr, (perm) => {
		collection.push([...perm]);
	});
	return collection;
}

const stringPermutations = (str, handler) => {
	explorePermutations(str.split(''), (arr) => {
		handler(arr.join(''));
	})
}

stringPermutations('bob', console.log);