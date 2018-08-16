const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) return undefined;
	if (root.id === id) return root;

	visited.add(root.id);

	let n = undefined;

	for (const child of root.children) {
		if (!visited.has(child.id)) {
			n = depthFirstSearch(child, id, visited);
		}

		if (n) break;
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

c.addChild(a, true);
c.addChild(d, true);
d.addChild(b, true);
f.addChild(a, true);
g.addChild(f, true);

console.log(depthFirstSearch(b, 'g'));
