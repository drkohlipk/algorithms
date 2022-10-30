const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) return undefined;
	else if (root.id === id) return root;

	visited.add(root.id);
	let node = undefined;

	for (const child of root.children) {
		if (!visited.has(child.id)) {
			node = depthFirstSearch(child, id, visited);
		}
		if (node) break;
	}

	return node;
};

const graph = new Graph();
const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');
const e = new GraphNode('e');
const f = new GraphNode('f');
const g = new GraphNode('g');

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);
graph.addNode(f);
graph.addNode(g);

a.addChild(b, true);
a.addChild(d, true);
b.addChild(e, true);
d.addChild(c, true);
c.addChild(f, true);

console.log(depthFirstSearch(a, 'f'));
console.log(depthFirstSearch(a, 'g'));
