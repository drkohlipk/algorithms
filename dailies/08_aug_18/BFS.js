const Graph = require('../../helpers/Graph');
const GraphNode = require('../../helpers/GraphNode');

const breadthFirstSearch = (root, id) => {
	const queue = [];
	const visited = new Set();

	queue.push(root);

	while (queue.length > 0) {
		const n = queue.shift();
		visited.add(n.id);

		for (const child of n.children) {
			if (child.id === id) {
				return child;
			} else if (!visited.has(child.id)) {
				visited.add(child.id);
				queue.push(child);
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
