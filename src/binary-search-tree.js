const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    let newData = new Node(data);
    if (!this.node) {
      return this.node = newData;
    } else {
      this.addNode(this.node, newData);
    }
  }

  addNode(node, newData) {
    if (newData.data > node.data) {
      if (!node.right) {
        node.right = newData;
      } else {
        this.addNode(node.right, newData);
      }
    } else {
      if (!node.left) {
        node.left = newData;
      } else {
        this.addNode(node.left, newData);
      }
    }
  }

  has(data) {
    let currentNode = this.node;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (!currentNode) {
        return false;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left; 
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.node;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (!currentNode) {
        return null;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left; 
      }
    }
    return null;
  }

  remove(data) {
    this.node = deleteNode(this.node, data)

    function deleteNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }
  
        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
  
        let newNode = minNode(node.right);
        node.data = newNode.data;
        node.right = deleteNode(node.right, newNode.data);
        return node;
      }
    }

    function minNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  }
  
  min() {
    let currentNode = this.node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.node;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
