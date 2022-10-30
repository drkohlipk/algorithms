cache = {}

class node:
	def __init__(self, weight):
		self.weight = weight
		self.leftChild = None
		self.rightChild = None

	def addChildren(self, child):
		if child.weight <= self.weight:
			if not self.leftChild:
				self.leftChild = child
			else:
				self.leftChild.addChildren(child)
		else:
			if not self.rightChild:
				self.rightChild = child
			else:
				self.rightChild.addChildren(child)

	def isLeaf(self):
		if not self.leftChild and not self.rightChild:
			return True
		return False

	def printNode(self):
		print self.weight

		if not self.isLeaf():
			if self.leftChild:
				self.leftChild.printNode()
			if self.rightChild:
				self.rightChild.printNode()

	def pruneNodes(self):
		w = 0

		if self.leftChild:
			v = self.leftChild.pruneNodes()
			if isinstance(v, node):
				self.leftChild = None
			else:
				w += v

		if self.rightChild:
			v = self.rightChild.pruneNodes()
			if isinstance(v, node):
				self.rightChild = None
			else:
				w += v

		if self.isLeaf():
			if cache["trim"] > 0:
				cache["trim"] -= 1
				return self

		w += self.weight
		cache[self] = w

		return w

class BST:
	def __init__(self):
		self.root = None

	def addNode(self, weight):
		if not self.root:
			self.root = node(weight)
		else:
			self.root.addChildren(node(weight))

	def removeTreeNode(self, nod):
		if not self.root:
			print "No nodes"
			return
		self.root.removeNode(nod)


	def printTree(self):
		if not self.root:
			print "No nodes"
		else:
			self.root.printNode()

	def pruneTree(self, n, k):
		cache["trim"] = n - k
		self.root.pruneNodes()

myTree = BST()


myTree.addNode(5)
myTree.addNode(3)
myTree.addNode(7)
myTree.addNode(2)
myTree.addNode(4)
myTree.addNode(1)
myTree.addNode(6)
myTree.addNode(8)
myTree.addNode(9)

myTree.pruneTree(9, 9)

for nod in cache:
	if nod == "trim":
		continue
	print '-----'
	print nod.weight
	print cache[nod]
