console.log(' ****** STACKS ******')

console.log('STACKS (LIFO) - Linked Lists')


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    //console.log(this)
    return this;
  }
  pop(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    //console.log(this)
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
//myStack.peek();
//myStack.pop();
//myStack.pop();
//myStack.pop();
console.log(myStack)

console.log('STACKS (LIFO) - Array')

class Stack2 { 
  constructor(){
      this.array = [];
      console.log('Empty Array:',this.array)
  }

peek() {
  return this.array[this.array.length-1];
 }
push(value){
  this.array.push(value);
  return this;
}
pop(){
  this.array.pop();
  return this;
}
}
const myStackArray = new Stack2();
myStackArray.push('google');
myStackArray.push('udemy');
myStackArray.push('MS');
myStackArray.push('discord');
myStackArray.pop();
console.log('Peek:',myStackArray.peek());
console.log(myStackArray)