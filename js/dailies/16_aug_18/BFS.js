const GraphNode = require('../../helpers/GraphNode');

const breadthFirstSearch = (root, id) => {
	if (!root) return undefined;

	const q = [];
	const visited = new Set();

	q.push(root);

	while (q.length) {
		const n = q.shift();
		visited.add(n.id);

		if (n.id === id) return n;

		for (const child of n.children) {
			if (!visited.has(child.id)) {
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
const h = new GraphNode('h');

a.addChild(d);
d.addChild(a);
a.addChild(c);
c.addChild(b);
b.addChild(f);
c.addChild(f);
f.addChild(h);
h.addChild(g);

console.log(breadthFirstSearch(a, 'g'));
