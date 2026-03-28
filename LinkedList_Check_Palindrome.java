import java.util.*;

public class LinkedList_Check_Palindrome {
    public int size;
    LinkedList_Check_Palindrome(){
        this.size = 0;
    }
    node head;
    class node{
        String data;
        node next;
        
        node(String str){
            this.data = str;
            this.next = null;
            size++;
        }
    }
    

    //add - first,last
    public void addFirst(String data){
        node newnode = new node(data);
        if(head == null){
            head = newnode;
            return;
        }

        newnode.next = head;
        head = newnode;
    }
    
    //add last
    public void addLast(String data){
        node newnode = new node(data);
        if(head == null){
            head = newnode;
            return;
        }

        node currentNode = head;
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }

        currentNode.next = newnode;
    }

    //Delete from first
    public void removeFirst(){
        if(head == null){
            System.out.println("empty list");
        }
        head = head.next;
        size--;
    }

    //remove from last
    public void removeLast(){
        if(head == null){
            System.out.println("empty list");
            return;
        }
        else if(head.next == null){
            head = null;
            size--;
            return;
        }
        size--;
        node currentNode = head;
        while(currentNode.next.next!= null){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    public node reverseListRecursive(node head){
        if(head == null || head.next== null){
            return head;
        }
        node newHead = reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
    }

    public node reverseList(node head){
        if(head==null || head.next==null){
            return head;
        }
        node previousNode = head;
        node currentNode = head.next;
        while(currentNode != null){
            node nextnode = currentNode.next;
            currentNode.next = previousNode;
            previousNode.next = null;


            previousNode = currentNode;
            currentNode = nextnode;
            // if(currentNode == null){
            //     head = previousNode;
            // }
        }
        return previousNode;
    }    
    

    public node secondHalfList(node head){
        
        node rabbitPointer = head;
        node turtlePointer = head;
        
        while((rabbitPointer.next!=null) && (rabbitPointer.next.next!=null)){
            rabbitPointer = rabbitPointer.next.next;
            turtlePointer = turtlePointer.next;
        }
        
        return turtlePointer.next;
    }
    public boolean isPalindrome(node head){
        if(head == null || head.next == null){
            return true;
        }
        node secondHalfHead = secondHalfList(head);
        node newHead = reverseList(secondHalfHead);
        node firstListcurrentNode = head;
        node secondListCurrentNode = newHead;
        // PrintList(firstListcurrentNode);
        // PrintList(secondListCurrentNode);
        while(secondListCurrentNode != null){
            if(firstListcurrentNode.data != secondListCurrentNode.data){
                return false;
            }
            secondListCurrentNode = secondListCurrentNode.next;
            firstListcurrentNode = firstListcurrentNode.next;
        }
        return true;
    }
    public void PrintList(node head){
        for(node currentNode = head; currentNode!=null; currentNode = currentNode.next ){
            System.out.print(currentNode.data+" -> ");
        }
        System.out.print("NULL");
        System.out.println();
    }
    public static void main(String[] args) {
        linked_list list = new linked_list();
        list.addFirst("a");
        list.addFirst("is");
        list.addFirst("this");
        list.addLast("list");
        
        list.PrintList(list.head);
    
        System.out.println(list.isPalindrome(list.head)); 

    }
}
