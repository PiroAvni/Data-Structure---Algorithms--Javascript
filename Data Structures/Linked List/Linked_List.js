
console.log('---- Linked List ----')
// 10 --> 5 --> 16 --> 9
// Structure :

// let myLinkedList = {
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:16,
//                 next:{
//                     value:9,
//                     value:null

//                 }
//             }
//         }
//     }
// }
class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}
class Linkedlist {
    constructor (value){
        // creating the (head) node
        this.head = { // first item in the Node
            value: value, // value of the Node
            next: null // pointer to next Node
        }
        this.tail = this.head;

        this.length = 1; // keeping track of the length of the node (list)
    }
    append(value){  // create or insert a set of node object after the last child of the element.
        /* const newNode = {
            value: value,
            next: null
        }; */
        const newNode = new Node (value)
        this.tail.next = newNode; // tells the tail of the previous Node to the point to the new Node 
        this.tail = newNode; // updates the tail with the new node 
        this.length++; // updates the length
       // console.log(this)
        return this; // returns the linked list 

    }
    prepend(value){
        // create NODE
        /* const newNode = { 
            value: value,
            next: null
        }; */
        const newNode = new Node(value)
        newNode.next = this.head; // POINTER TO HEAD FIRST ITEM 
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
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
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
    // reverse(){
    //     //check params
    //     if(!this.head.next){
    //         return this.head;
    //     }
    //     let first = this.head;
    //     this.tail = this.head
    //     let second = first.next;
    //     while(second){
    //         const temp = second.next
    //         second.next = first;
    //         first = second;
    //         second = temp;
    //     }
    //     this.head.next = null;
    //     this.head = first;
    //     //return this.PrintList()
    //     return this
    // }

    getLastNode()
    {
        let prev;
        let current = this.head;
        while (current !== null) {
            prev = current;
            current = current.next;
        }
        return prev;
    }
    reverse()
    {
        let current = this.head;
        let prev = null;
        while (current) {
            //debugger; //remove this line if you want to exit debugging
            let temp = current.next; //save the next in a temporary variable
            current.next = prev; //modifying the current's next 
            prev = current; //actual reversing
            current = temp; //looping through
        }
        this.head = prev;
        this.tail = this.getLastNode();
        return;
    }
   
    // remove(index) {
    //     if(index>this.length)
    //     {
    //       console.log('Out of bounds')
    //       return ;
    //     }
    //     if (index === 0) {
    //       this.head = this.head.next;
    //       this.length--;
         
    //     }
    //     else {
    //       let nodeToBeDeleted = this.traverseToNode(index);
    //       if (nodeToBeDeleted) {
    //         nodeToBeDeleted.next = nodeToBeDeleted.next.next;
    //         this.length--;
            
    //       }
    //       else {
    //         let current = this.head;
    //         let previous;
    //         while (current.next != null) {
    //           previous = current;
    //           current = current.next;
     
    //         }
    //         previous.next = null;
    //         this.tail = previous;
    //         this.length--;
    //       }
    //     }
    //   }
    /* remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.PrintList();
      } */
}
const myLinkedList = new Linkedlist(10) // Creating a linked list run the linked list with a value
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(9)
myLinkedList.prepend(1)
myLinkedList.insert(100, 100)
myLinkedList.insert(2, 11)
myLinkedList.remove(0)
myLinkedList.remove(7)
//myLinkedList.remove(2)
myLinkedList.reverse()
//console.log('Last Node:', myLinkedList.getLastNode())
myLinkedList.PrintList()
console.log('end',myLinkedList)


/** 
 * ! reverse() explationation in Java
 
public void reverseTimeAndSpaceOptimised(){
    if(this.length <= 1){
        System.out.println("nothing to reverse");
    }
    else{
         Node prev = null;
         Node current = this.head;
         Node next = null;
         while (current != null){
             //1. get the nextNode from the currentNode
             //we have to grab it first because in the next step
             // we are going to lose the pointer
             
             next = current.getNext();

             //2. set the currentNode to the previousNode
             //we are basically now connecting the node in reverse
             
             current.setNext(prev);

             //3. move the current in the previousNode
             //now the currentNode have served its purpose,
             // and we move it into the previous,
             // to be assigned as a previous node in the next iteration
             
             prev = current;

             //4. move the next into the current so
             // that the loop can keep on iterating
             //we need to continue iterating, by assigning next
             // to current the loop can continue to iterate
             
             current = next;
         }
         //5. assign the head to the tail
         this.tail = this.head;
         //6. assign the end of the linkedlist to the head
         this.head = prev;
    }
} 
*/