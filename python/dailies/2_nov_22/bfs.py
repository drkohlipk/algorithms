from typing import List, Optional, Set

from helpers.graph_classes.graph_node import GraphNode
from helpers.testing.graph_search_tester import GraphSearchTester


def breadth_first_search(
        root: Optional[GraphNode], identifier: int
) -> Optional[GraphNode]:
    if root is None:
        return None

    q: List[GraphNode] = []
    visited: Set[GraphNode] = set()

    q.append(root)

    while len(q) > 0:
        n = q.pop(0)
        visited.add(n)

        if n.get_id() == identifier:
            return n

        for child in n.get_children():
            if child not in visited:
                q.append(child)

    return None


GraphSearchTester(breadth_first_search)
