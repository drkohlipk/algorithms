class Graph {
	constructor() {
		this._nodes = new Set();
	}

	get nodes() {
		return this._nodes;
	}

	addNode(node) {
		this.nodes.add(node);
	}
}

module.exports = Graph;
