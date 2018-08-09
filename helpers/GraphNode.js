class GraphNode {
	constructor(id) {
		this._id = id;
		this._children = [];
	}

	get id() {
		return this._id;
	}

	get children() {
		return this._children;
	}

	addChild(node, isUndirected) {
		this._children.push(node);

		if (isUndirected) {
			node.addChild(this, false);
		}
	}

	removeChild(id) {
		for (let i = 0; i < this.children.length; i++) {
			if (this._children[i].id === id) {
				return this._children.splice(i, 1)[0];
			}
		}

		return undefined;
	}
}

module.exports = GraphNode;
