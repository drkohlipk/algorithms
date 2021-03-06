const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) return undefined;
	else if (root.id === id) return root;

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

console.log(depthFirstSearch(a, 'g'));
