const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) return undefined;

	visited.add(root.id);

	let n = undefined;

	for (const child of root.children) {
		if (child.id === id) return child;

		if (!visited.has(child.id)) {
			n = depthFirstSearch(child, id, visited);
		}
	}

	return n;
};

const graph = new Graph();
const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');
const e = new GraphNode('e');
const f = new GraphNode('f');
const g = new GraphNode('g');

b.addChild(a);
b.addChild(e);
e.addChild(g);
g.addChild(f);
f.addChild(b);
f.addChild(c);

console.log(depthFirstSearch(a, 'g'));
