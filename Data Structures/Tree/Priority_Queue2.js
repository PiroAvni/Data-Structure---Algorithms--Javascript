/** @format */

// https://learnersbucket.com/tutorials/data-structures/priority-queue-implementation-in-javascript/
console.log("***** Priority_Queue2 *****");

function PriorityQueue2() {
  let items = [];

  //Container
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //Add a new element in queue
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    //To check if element is added
    let added = false;
    for (let i = 0; i < items.length; i++) {
      //We are using giving priority to higher numbers
      //If new element has more priority then add it at that place
      if (queueElement.priority > items[i].priority) {
        items.splice(i, 0, queueElement);

        //Mark the flag true
        added = true;
        break;
      }
    }

    //If element is not added
    //Then add it to the end of the queue
    if (!added) {
      items.push(queueElement);
    }
  };

  //Remove element from the queue
  this.dequeue = () => {
    return items.shift();
  };

  //Return the first element from the queue
  this.front = () => {
    return items[0];
  };

  //Return the last element from the queue
  this.rear = () => {
    return items[items.length - 1];
  };

  //Check if queue is empty
  this.isEmpty = () => {
    return items.length == 0;
  };

  //Return the size of the queue
  this.size = () => {
    return items.length;
  };
  // printQueue function
  // prints all the element of the queue
  //Print the queue
  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
}

// Input:
let pQ = new PriorityQueue2();
pQ.enqueue(1, 3);
pQ.enqueue(5, 2);
pQ.enqueue(6, 1);
pQ.enqueue(11, 1);
pQ.enqueue(13, 1);
pQ.enqueue(10, 3);
pQ.dequeue();
pQ.print();

// Output: "10 - 3";
// ("5 - 2");
// ("6 - 1");
// ("11 - 1");
// ("13 - 1");
