console.log('---- Doubly Linked List ----')

// creating a Node class
class Node2{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null  
    }
}
class DoublyLinkedlist {
    constructor (value){
        // creating the (head) node
        this.head = { // first item in the Node
            value: value, // value of the Node
            next: null, // pointer to next Node
            prev: null
    };
        this.tail = this.head;

        this.length = 1; // keeping track of the length of the node (list)
    }
    append(value){  // create or insert a set of node object after the last child of the element.
         const newNode = {
            value: value,
            next: null,
            prev: null
        }; 
        console.log(newNode)
        //const newNode = new Node2 (value)
        newNode.prev = this.tail // pointer to last item
        //console.log('prev:', newNode.prev)
        this.tail.next = newNode; // tells the tail of the previous Node to the point to the new Node 
        this.tail = newNode; // updates the tail with the new node 
        this.length++; // updates the length
        //console.log('TAIL =',this.tail)
        return this; // returns the linked list 

    }
    prepend(value){
        // create NODE
        /* const newNode = { 
            value: value,
            next: null
        }; */
        const newNode = new Node2(value)
        newNode.next = this.head; // POINTER TO HEAD FIRST ITEM 
        this.head.prev = newNode
        this.head = newNode; // HEAD EQUAL TO NEW HEAD
        this.length++; // INCREASE THE LENGTH
        return this // RETURNS THE LIST
    }
    // create an array to illistrate the Linked -List as an array
    PrintList(){
        const array =[] // empty array 
        let currentNode = this.head; // current node  - first item 
        while(currentNode !== null){ 
            array.push(currentNode.value); // add the current node value in to the array 
            currentNode = currentNode.next; // keeps going untill it hits NULL
        }
        console.log(array)
        return array;
    }
    // insert before, after, at the top or bottom of the element.
    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(value);
        }
        // const newNode = {
        //   value: value,
        //   next: null
        // }
        const newNode = new Node2(value)
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.PrintList();
      }
      remove(index) {
        // check params
        if (index <= 0) {
          this.head = this.head.next
          console.log('this.head =', this.head)
        } else if (index >= this.length - 1) {
          const leader = this.traverseToIndex(this.length - 2)
          this.tail = leader
          console.log('this.tail =', this.tail)
          this.tail.next = null
        } else {
          const leader = this.traverseToIndex(index - 1)
          leader.next = leader.next.next
          console.log('leader.next =', leader.next)
        }
        this.length--
        return this.PrintList()
      }
     
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        //console.log('currentNode:', currentNode)
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    
}



const myDoublyLinkedList = new DoublyLinkedlist(10) // Creating a linked list run the linked list with a value
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.append(9)
myDoublyLinkedList.prepend(1)
//myDoublyLinkedList.insert(100, 100)
myDoublyLinkedList.insert(1, 99)
//myDoublyLinkedList.remove(0)
//myDoublyLinkedList.remove(7)
myDoublyLinkedList.remove(2)
myDoublyLinkedList.PrintList()
console.log(myDoublyLinkedList)

console.log('****** Visual Doubly Linked List: ******')
// const logDLL = myDoublyLinkedList => {
//     if (myDoublyLinkedList.head) return logDLL(myDoublyLinkedList.head);
//     console.log("value:", myDoublyLinkedList.value,
//     " next:", myDoublyLinkedList.next ? myDoublyLinkedList.next.value : null,
//     " previous:", myDoublyLinkedList.previous ? myDoublyLinkedList.previous.value : null);
//     if (myDoublyLinkedList.next !== null) logDLL(myDoublyLinkedList.next);
//   }
   
//   logDLL(myDoublyLinkedList);