const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.node = null;
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.node) {
      let curr = this.node;
      while (curr.next) curr = curr.next;
      curr.next = new ListNode(value);
    } else {
      this.node = new ListNode(value);
    }
  }

  dequeue() {
    let value = this.node.value;
    this.node = this.node.next;
    return value
  }
}

module.exports = {
  Queue
};
