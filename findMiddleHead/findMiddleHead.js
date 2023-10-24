// Write a function findMiddle(head) that takes the head of the linked list as input and returns the middle node.

// Input: head of a singly linked list
// Output: middle node of the linked list

// Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: Node with value 3

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Output: Node with value 4 or 5 (either is acceptable)

// Create a node class to construct a node
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  // Create a Singly Linked List class to create a SLL and methods to manipulate or extrapulate data from the SLL
  class SLL{
    // Constructor method for a SLL
    constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    // Checks if the list is empty
    isEmpty(){
      return this.head === null;
    }
  
    // Adds a new Node to the list
    append(value){
      let newNode = new Node(value);
  
      if(this.isEmpty()){
        this.head = newNode;
        this.size++;
        this.tail = this.head;
      } else {
        // Helper method is used to refine code
        this.addAtBack(value);
      }
  
      return this;
      
    }
  
    // Adds a new Node to the end of a list
    addAtBack(value){
      let newNode = new Node(value);
      let curr = this.head;
  
      while(curr.next){
        curr = curr.next;
      }
      curr.next = newNode;
      this.size++;
      this.tail = curr.next;
    }
  
    // Finds the middle Node of a list
    findTheMiddle(){
      let curr = this.head;
      let runner = this.head.next.next
      if(this.isEmpty()){
        return "Empty List"
      }
  
      if(curr.next === null){
        return curr;
      }
  
      while(runner.next){
        curr = curr.next;
        runner = runner.next;
      }
      console.log("The Middle Node is:", curr.value);
      return curr;
      
    }
    // Displays a List
    display(){
      let curr = this.head;
      let listView = ""
  
      if(this.isEmpty()){
        return "Empty List"
      }
  
      while(curr){
      if(curr.next === null){
        listView += curr.value + " --> null"
      } else {
        listView += curr.value + " --> "
      }
       curr = curr.next; 
      }
      console.log(listView);
    }
    
    
  }
  
  // Instantiate a new SLL
  let list = new SLL();
  
  // Chained methods
  list.append(1).append(2).append(3).append(4).append(5).append(6).display()
  // Single method call
  list.findTheMiddle();