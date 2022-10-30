const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) {
		return undefined;
	}

	visited.add(root.id);
	let n = undefined;

	for (const child of root.children) {
		if (child.id === id) {
			return child;
		} else if (!visited.has(child.id)) {
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
const h = new GraphNode('h');

a.addChild(b);
b.addChild(c);
b.addChild(d);
d.addChild(a);
d.addChild(g);
e.addChild(d);
e.addChild(g);
g.addChild(f);

console.log(depthFirstSearch(a, 'h'));
