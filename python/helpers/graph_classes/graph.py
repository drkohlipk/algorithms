from typing import Set

from helpers.graph_classes.graph_node import GraphNode


class Graph:
    """
    Graph data structure.  Can be directed or undirected
    """

    def __init__(self) -> None:
        self._nodes = set()

    def get_nodes(self) -> Set[GraphNode]:
        """
        Getter for the graph's nodes

        Returns:
                Set[GraphNode]: set of nodes for the graph
        """

        return self._nodes

    def add_node(self, node: GraphNode) -> None:
        """
        Adds a node to the graph

        Args:
                node (GraphNode): Node that you would like to add to the graph
        """

        self._nodes.add(node)
