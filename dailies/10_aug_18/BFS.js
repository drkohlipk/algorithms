const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const breadthFirstSearch = (root, id) => {
	if (!root) return undefined;

	const q = [];
	const visited = new Set();

	q.push(root);

	while (q.length) {
		const n = q.shift();

		if (n.id === id) return n;

		visited.add(n.id);

		for (const child of n.children) {
			if (!visited.has(child.id)) {
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
const h = new GraphNode('h');

a.addChild(b);
b.addChild(c);
b.addChild(d);
d.addChild(a);
d.addChild(g);
e.addChild(d);
e.addChild(g);
g.addChild(f);

console.log(breadthFirstSearch(a, 'h'));
