/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.list = {};

  this.list.head = null;
  this.list.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  if (this.list.tail === null) {
    this.list.tail === this.makeNode(value);
    this.list.tail = this.list.head;
  } else {
    this.list.tail.next === this.makeNode(value);
  };
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.list.head.next;
  delete this.list.head;
  this.list.head = oldHead;
};

LinkedList.prototype.contains = function(value) {
  let head = this.list.head;

  let helper = function(node, target) {
    if (node.value === undefined) {
      return false;
    }
    if (node.value === target) {
      return true;
    } else {
      helper(node.next, target)
    }
  }
  return helper(head, value);
};

LinkedList.prototype.makeNode = function(value) {
  let node = {};

  node.value === value;
  node.next === null;
  
};
