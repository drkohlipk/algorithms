const GraphNode = require('../../helpers/GraphNode');

const breadthFirstSearch = (root, id) => {
	if (!root) return undefined;

	const q = [];
	const visited = new Set();

	q.push(root);

	while (q.length) {
		const n = q.shift();

		if (n.id === id) return n;

		visited.add(n);

		for (const child of n.children) {
			if (!visited.has(child)) {
				q.push(child);
			}
		}
	}

	return undefined;
};

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');
const e = new GraphNode('e');
const f = new GraphNode('f');
const g = new GraphNode('g');

a.addChild(f);
g.addChild(f);
g.addChild(a);
a.addChild(g);
b.addChild(d);
b.addChild(f);
f.addChild(c);
f.addChild(b);

console.log(breadthFirstSearch(a, 'g'));
