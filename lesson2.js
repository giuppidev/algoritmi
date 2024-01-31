class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
      this.last = node;
      return;
    }

    this.last.next = node;
    this.last = node;
  }

  insertAtBegin(node) {
    node.next = this.head;
    this.head = node;
  }

  deleteFirst() {
    this.head = this.head.next;
  }

  print() {
    let data = "";
    let last = this.head;

    while (last !== null) {
      data += " " + last.value;
      last = last.next;
    }
    return data;
  }
}

const list = new LinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node10 = new Node(10);

list.push(node1);

list.push(node2);

console.log(list.print());
console.log("last:", list.last);

list.push(node3);

console.log(list.print());
console.log("last:", list.last);

const obj = {
  prop1: "value1",
  prop2: "value2",
};

obj.prop1;

const map = new Map();

map.set("prop1", "value1");
map.has("prop1");
