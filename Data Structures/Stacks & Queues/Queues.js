console.log(' ****** QUEUES ******')

console.log('QUEUES (FIFO)')

class Node1{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queues{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node1(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first === this.last){
            this.last = null;
        }
        //const holdingPointer = this.first; // this provide a refference
        this.first = this.first.next;
        this.length--;
        //return holdingPointer
        return this;
    }
    Isfull(){

    } 
    Isempty(){

    }
    Size(){

    }
}
const myQueue = new Queues();
//console.log(myQueue.peek());
myQueue.enqueue('Emrah');
myQueue.enqueue('Cenel');
myQueue.enqueue('Jeyan');
myQueue.enqueue('Ceren');
myQueue.enqueue('Jeyla');
console.log(myQueue)
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue)