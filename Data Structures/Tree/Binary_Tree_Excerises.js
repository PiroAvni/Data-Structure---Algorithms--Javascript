console.log("**** Binary Tree - Excerise  ****")

class Node2 {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  // Binary Search tree class
  class BinarySearchTree2 {
    constructor(){

    // root of a binary search tree
      this.root = null;
    }
    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(value){
        // Creating a node and initialising
        // with value
      const newNode = new Node2(value);

        // root is null then node will
        // be added to the tree and made root.
      if(this.root === null) {
        this.root = newNode;
        // find the correct position in the
        // tree and add the node
      } else {
        // Method to insert a node in a tree
        // it moves over the tree to find the location
        // to insert a node with a given value
        let currentNode = this.root;
        while(true){
            // if the data is less than the node
            // value move left of the tree
            if(value < currentNode.value){
                //left
                // if left is null insert node here
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                // if left is not null recur until
                // null is found
                currentNode = currentNode.left
            }else{
                // if the data is more than the node
                // value move right of the tree
                // Right
                if(!currentNode.right){
                    // if right is null insert node here
                    currentNode.right =newNode;
                    return this;
                }
                // if right is not null recur until
                // null is found
                currentNode = currentNode.right;
            }
        }
      }
    }
   
    lookup(value){
        // check if root is empty
      if(!this.root){
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        // if the data is less than the node
        // value move left of the tree
        if(value < currentNode.value){
            currentNode = currentNode.left
        // if the data is more than the node
        // value move right of the tree
        }else if ( value > currentNode.value){
            currentNode = currentNode.right;
        // if data is equal to the node data
        // return node
        }else if (currentNode.value === value){
            return currentNode;
        }
      }
      return false;
    } 
    // helper method that calls the
    // removeNode with a given Value
     remove(value){
         // check if root is empty
        if(!this.root){
            return false;
        }
        // grab the currentNode as this root first 
        let currentNode = this.root;
        // declare new varible called Parent Node
        // before we get to the child Node it store a reference to the value and 
        // allows access to parent Node and creates a link 
        let parentNode = null;
        while(currentNode){
            // If value is less then move to the left <
            if(value < currentNode.value){
                // keeping track of the pearent node
              parentNode = currentNode;
              currentNode = currentNode.left;
              // If value is less then move to the Righ >
            } else if(value > currentNode.value){
              parentNode = currentNode;
              currentNode = currentNode.right;
            } else if (currentNode.value === value) {
              //We have a match, get to work!
              
              //Option 1: No right child: 
              if (currentNode.right === null) {
                if (parentNode === null) {
                  this.root = currentNode.left;
                } else {
                  
                  //if parent > current value, make current left child a child of parent
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.left;
                  
                  //if parent < current value, make left child a right child of parent
                  } else if(currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.left;
                  }
                }
              
              //Option 2: Right child which doesnt have a left child
              } else if (currentNode.right.left === null) {
                currentNode.right.left = currentNode.left;
                if(parentNode === null) {
                  this.root = currentNode.right;
                } else {
                  
                  //if parent > current, make right child of the left the parent
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = currentNode.right;
                  
                  //if parent < current, make right child a right child of the parent
                  } else if (currentNode.value > parentNode.value) {
                    parentNode.right = currentNode.right;
                  }
                }
              
              //Option 3: Right child that has a left child
              } else {
      
                //find the Right child's left most child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                while(leftmost.left !== null) {
                  leftmostParent = leftmost;
                  leftmost = leftmost.left;
                }
                
                //Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;
      
                if(parentNode === null) {
                  this.root = leftmost;
                } else {
                  if(currentNode.value < parentNode.value) {
                    parentNode.left = leftmost;
                  } else if(currentNode.value > parentNode.value) {
                    parentNode.right = leftmost;
                  }
                }
              }
            return true;
            }
        }
    }
}

  
  const tree2 = new BinarySearchTree2();
  tree2.insert(9)
  tree2.insert(4)
  tree2.insert(6)
  tree2.insert(20)
  tree2.insert(170)
  tree2.insert(15)
  tree2.insert(1)
  console.log('ROOT:',tree2.root)

//        9
//      /   \
//     4     20
//    / \    / \
//   1  6   15  170

console.log('treeSum')
console.log('treeSum: left', tree2.root,tree2.root.left)
console.log('Sum:',(tree2.root)+(tree2.root.left)+ (tree2.root.right))

const treeSum = (value)=>{
if(tree2.currentNode === null)return 0;
return tree2.root.value + treeSum(tree2.root.left) + treeSum(tree2.root.right);
};
//treeSum()