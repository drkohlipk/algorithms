const chalk = require('chalk');
const Graph = require('../../Graph');
const GraphNode = require('../../GraphNode');
const graphSearch = require('./graphSearch');

class GraphSearchTester {
	constructor(numNodes, searchMethod) {
		this.graph = new Graph();
		this.numNodes = numNodes > 1000 ? 1000 : numNodes;
		this.searchMethod = searchMethod;

		this.start();
	}

	start() {
		for (let i = 0; i < this.numNodes; i++) {
			this.graph.addNode(new GraphNode(i));
		}

		this.createEdges();
	}

	createEdges() {
		const nodeArr = Array.from(this.graph.nodes);
		const numEdges = Math.floor(this.numNodes * Math.random());

		for (let i = 0; i < numEdges; i++) {
			const randFromIdx = Math.floor(this.numNodes * Math.random());
			const randToIdx = Math.floor(this.numNodes * Math.random());

			nodeArr[randFromIdx].addChild(nodeArr[randToIdx]);
		}

		this.testSearch();
	}

	testSearch() {
		let numFailures = 0;
		const nodes = this.graph.nodes;

		for (const node of nodes) {
			for (let i = 0; i < this.numNodes; i++) {
				const actual = graphSearch(node, i);
				const test = this.searchMethod(node, i);

				if (actual !== test) numFailures++;
			}
		}

		if (numFailures) {
			console.log(
				chalk.red(
					`Sorry, you had ${numFailures} failure${
						numFailures > 1 ? 's' : ''
					}! 😭`
				)
			);
			return;
		}

		console.log(chalk.green(`🎉  Congrats!  All tests passed! 🎉`));
	}
}

module.exports = GraphSearchTester;
