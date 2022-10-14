#include <bits/stdc++.h>
using namespace std;

/* Node of the doubly linked list */
class Node {
public:
	int data;
	Node* next;
	Node* prev;
};

/* Function to reverse a Doubly Linked List */
void reverse(Node** head_ref)
{
	Node* temp = NULL;
	Node* current = *head_ref;

	/* swap next and prev for all nodes of
	doubly linked list */
	while (current != NULL) {
		temp = current->prev;
		current->prev = current->next;
		current->next = temp;
		current = current->prev;
	}

	/* Before changing the head, check for the cases like
	empty list and list with only one node */
	if (temp != NULL)
		*head_ref = temp->prev;
}
void push(Node** head_ref, int new_data)
{
	/* allocate node */
	Node* new_node = new Node();

	/* put in the data */
	new_node->data = new_data;

	/* since we are adding at the beginning,
	prev is always NULL */
	new_node->prev = NULL;

	/* link the old list off the new node */
	new_node->next = (*head_ref);

	/* change prev of head node to new node */
	if ((*head_ref) != NULL)
		(*head_ref)->prev = new_node;

	/* move the head to point to the new node */
	(*head_ref) = new_node;
}
void printList(Node* node)
{
	while (node != NULL) {
		cout << node->data << " ";
		node = node->next;
	}
}

// Driver's code
int main()
{
	/* Start with the empty list */
	Node* head = NULL;
	push(&head, 2);
	push(&head, 4);
	push(&head, 8);
	push(&head, 10);

	cout << "Original Linked list" << endl;
	printList(head);

	// Function call
	reverse(&head);

	cout << "\nReversed Linked list" << endl;
	printList(head);

	return 0;
}
