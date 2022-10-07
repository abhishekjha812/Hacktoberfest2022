import java.util.*;

public class linked_list {
    public int size;
    linked_list(){
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
        System.out.println(list.size);
        list.PrintList(list.head);
        list.head = list.reverseListRecursive(list.head);
        list.PrintList(list.head);

        list.removeFirst();
        list.removeLast();
        list.PrintList(list.head);

        System.out.println(list.size);
        // list.reverseList();
        list.head = list.reverseListRecursive(list.head);
        list.PrintList(list.head);


    }
}
