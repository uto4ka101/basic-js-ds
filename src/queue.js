const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let underlyingList;

    if (this.length === 0) {
      underlyingList = new ListNode(null);
    } else {
      underlyingList = this.head;
    }

    return underlyingList;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    
    this.length++;
  }

  dequeue() {
    let deletedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
