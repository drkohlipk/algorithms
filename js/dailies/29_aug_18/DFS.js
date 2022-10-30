const GraphNode = require('../../helpers/GraphNode');

const depthFirstSearch = (root, id, visited = new Set()) => {
	if (!root) return undefined;
	else if (root.id === id) return root;

	visited.add(root);

	let n = undefined;

	for (const child of root.children) {
		if (!visited.has(child)) {
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

a.addChild(f);
g.addChild(f);
g.addChild(a);
a.addChild(g);
b.addChild(d);
b.addChild(f);
f.addChild(c);
f.addChild(b);

console.log(depthFirstSearch(a, 'f'));
