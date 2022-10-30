from typing import Optional, Set

from helpers.testing.graph_search_tester import GraphSearchTester
from helpers.graph_classes.graph_node import GraphNode


def depth_first_search(
    root: Optional[GraphNode],
    identifier: int,
    visited: Set[GraphNode] = None
) -> Optional[GraphNode]:
    if root is None:
        return None
    if root.get_id() == identifier:
        return root

    if not visited:
        visited = set()

    visited.add(root)

    n = None

    for child in root.get_children():
        if child not in visited:
            n = depth_first_search(
                child, identifier, visited
            )

        if n:
            break

    return n


GraphSearchTester(depth_first_search)
