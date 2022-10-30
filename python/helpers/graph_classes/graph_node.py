from __future__ import annotations
from typing import Set


class GraphNode:
    """
    Node for use with graphing algorithms
    """

    def __init__(self, identifier: int) -> None:
        self._id: int = identifier
        self._children: Set[GraphNode] = set()

    def get_id(self) -> int:
        """
        Getter for the node's ID

        Returns:
                int: ID for the node
        """

        return self._id

    def get_children(self) -> Set[GraphNode]:
        """
        Getter for the child nodes of this node object

        Returns:
                Set[GraphNode]: child nodes
        """

        return self._children

    def add_child(
        self, node: GraphNode, is_bi_directional: bool = False
    ) -> None:
        """
        Adds a child node to this node object

        Args:
                node (GraphNode): node you would like to add as a child
                is_bi_directional (bool): whether or not the node should be bi-directional
        """

        self._children.add(node)

        if is_bi_directional:
            node.add_child(self, False)

    def remove_child(self, node: GraphNode) -> None:
        """
        Removes the given child node

        Args:
                node (GraphNode): child node that you would like to remove
        """

        self._children.discard(node)
