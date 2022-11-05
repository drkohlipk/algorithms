from typing import Optional, Set
from helpers.graph_classes.graph_node import GraphNode
from helpers.testing.graph_search_tester import GraphSearchTester


def depth_first_search(
        root: Optional[GraphNode],
        identifier: int,
        visited: Optional[Set[GraphNode]] = None,
) -> Optional[GraphNode]:
    if root is None or root.get_id() == identifier:
        return root

    if visited is None:
        visited = set()

    visited.add(root)

    n = None

    for child in root.get_children():
        if child not in visited:
            n = depth_first_search(
                child, identifier, visited
            )

        if n is not None:
            break

    return n


GraphSearchTester(depth_first_search)
