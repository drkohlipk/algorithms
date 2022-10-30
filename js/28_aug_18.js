class DependencyGraph {
	constructor() {
		this.isCyclic = false;
		this.loadOrder = [];
		this.projects = new Set();
	}

	addProject(project) {
		this.projects.add(project);
		project.setDependencyGraph(this);
		this.invalidateLoadOrder();
	}

	invalidateLoadOrder() {
		this.isCyclic = false;
		this.loadOrder = [];
	}

	loadDependency(project, cycleDetectionSet, visited) {
		visited.add(project);
		cycleDetectionSet.add(project);

		for (const dependency of project.dependencies) {
			if (!visited.has(dependency)) {
				this.loadDependency(dependency, cycleDetectionSet, visited);
			} else if (cycleDetectionSet.has(dependency)) {
				this.isCyclic = true;
				throw new Error('Dependencies contain a cycle and cannot be loaded.');
			}
		}

		this.loadOrder.push(project.id);
		cycleDetectionSet.delete(project);
	}

	loadDependencies() {
		if (!this.projects.size) {
			throw new Error(
				'The given dependency graph does not contain any projects.'
			);
		} else if (!this.loadOrder.length) {
			const visited = new Set();

			for (const project of dependencyGraph.projects) {
				if (!visited.has(project)) {
					const cycleDetectionSet = new Set();

					this.loadDependency(project, cycleDetectionSet, visited);
				}
			}
		}

		if (this.isCyclic) {
			throw new Error('Dependencies contain a cycle and cannot be loaded.');
		}

		console.log(this.loadOrder);
	}
}

class Project {
	constructor(id) {
		this.id = id;
		this.dependencyGraph = undefined;
		this.dependencies = new Set();
	}

	addDependency(dependency) {
		this.dependencies.add(dependency);
		this.dependencyGraph.invalidateLoadOrder();
	}

	setDependencyGraph(dependencyGraph) {
		this.dependencyGraph = dependencyGraph;
	}
}

const dependencyGraph = new DependencyGraph();
const a = new Project('a');
const b = new Project('b');
const c = new Project('c');
const d = new Project('d');
const e = new Project('e');
const f = new Project('f');

dependencyGraph.addProject(a);
dependencyGraph.addProject(b);
dependencyGraph.addProject(c);
dependencyGraph.addProject(d);
dependencyGraph.addProject(e);
dependencyGraph.addProject(f);

c.addDependency(d);
d.addDependency(c);
//d.addDependency(a);
//f.addDependency(b);
//d.addDependency(b);
//a.addDependency(f);
//c.addDependency(d);
//b.addDependency(a);

dependencyGraph.loadDependencies();
