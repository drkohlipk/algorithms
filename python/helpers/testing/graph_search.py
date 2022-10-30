from typing import Optional

from helpers.graph_classes.graph_node import GraphNode


def breadth_first_search(
    root: Optional[GraphNode], identifier: int
) -> Optional[GraphNode]:
    if root is None:
        return None

    q = []
    visited = set()

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
