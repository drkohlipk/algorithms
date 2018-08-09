class Graph {
	constructor() {
		this._nodes = [];
	}

	get nodes() {
		return this._nodes;
	}

	addNode(node) {
		this.nodes.push(node);
	}
}

module.exports = Graph;
