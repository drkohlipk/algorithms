import helpers16mar.Node;
import helpers16mar.SList;
import static java.lang.System.out;

class remKnownNode{
	public static void main(String[] args) {
		SList myList = new SList();

		myList.addFront(8);
		myList.addFront(6);
		myList.addFront(7);
		myList.addFront(5);
		myList.addFront(3);
		myList.addFront(0);
		myList.addFront(9);

		myList.printList();

		out.println("\nBREAK BREAK BREAK\n");

		Node remNode = myList.findNode(5);
		myList.remKnownNode(remNode);

		myList.printList();
	}
}
