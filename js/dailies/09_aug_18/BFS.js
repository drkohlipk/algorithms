const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const breadthFirstSearch = (root, id) => {
	if (!root) return undefined;

	const q = [];
	const visitied = new Set();

	q.push(root);

	while (q.length) {
		const node = q.shift();
		visitied.add(node.id);

		if (node.id === id) return node;

		for (const child of node.children) {
			if (!visitied.has(child.id)) {
				q.push(child);
			}
		}
	}

	return undefined;
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

console.log(breadthFirstSearch(a, 'f'));
console.log(breadthFirstSearch(a, 'g'));
