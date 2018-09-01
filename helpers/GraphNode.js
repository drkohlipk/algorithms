class GraphNode {
	constructor(id) {
		this._id = id;
		this._children = new Set();
	}

	get id() {
		return this._id;
	}

	get children() {
		return this._children;
	}

	addChild(node, isUndirected) {
		this._children.add(node);

		if (isUndirected) {
			node.addChild(this, false);
		}
	}

	removeChild(id) {
		return this._children.delete(id);
	}
}

module.exports = GraphNode;
