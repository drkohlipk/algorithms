import math
import random

from typing import Callable
from helpers.graph_classes.graph import Graph
from helpers.graph_classes.graph_node import GraphNode
from helpers.testing.graph_search import breadth_first_search


class GraphSearchTester:
    """
    Testing class for graph search algorithms such as BFS and DFS
    """

    def __init__(
        self, search_method: Callable[
            [GraphNode, int],
            GraphNode
        ]
    ) -> None:
        self._graph = Graph()
        self._num_nodes = 1000
        self._search_method = search_method

        self._start()

    def _start(self) -> None:
        for i in range(self._num_nodes):
            self._graph.add_node(GraphNode(i))

        self._create_edges()

    def _create_edges(self) -> None:
        node_arr = list(self._graph.get_nodes())
        num_edges = math.floor(self._num_nodes * random.random())

        for _ in range(num_edges):
            rand_from_idx = math.floor(
                self._num_nodes * random.random())
            rand_to_idx = math.floor(self._num_nodes * random.random())

            node_arr[rand_from_idx].add_child(node_arr[rand_to_idx])

        self._test_search()

    def _test_search(self) -> None:
        num_failures = 0
        nodes = list(self._graph.get_nodes())

        for node in nodes:
            for i in range(self._num_nodes):
                actual = breadth_first_search(node, i)
                test = self._search_method(node, i)

                if actual is not test:
                    num_failures += 1
                    print(f"actual: {actual}, test: {test}")

        if num_failures:
            print(
                f"Sorry, but you had {num_failures} failure{'s' if num_failures > 1 else ''}!  😭")

            return

        print("🎉 Congrats!  All tests passed! 🎉")
