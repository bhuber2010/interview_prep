
export class linkedList {
  constructor(node) {
    this.head = node || null;
    this.tail = node || null;
    this.count = node ? 1 : 0;
  }

  printHead(list){
    return list.head;
  }

  Node(value) {
    return {
      prev: null,
      value: value,
      next: null
    };
  }

  addNode(value) {
    const newNode = new this.Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return newNode;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
    this.tail = newNode;
    this.count++;
    return newNode;

  }

  searchForNode(position){
    let pos = 1;
    let currentNode = this.head;

    while (pos != position) {
      currentNode = currentNode.next;
      pos++;
    }

    return currentNode;
  }

  removeNode(position) {
    let pos = 1;
    let prev = null;
    let curr = this.head;

    if (position < 0 || position > this.count) {
      throw new Error("not a valid position");
    }

    while(pos < position) {
      prev = curr;
      curr = curr.next;
      pos++;
    }

    if (pos != 1) {
      prev.next = curr.next;
      if (!this.tail) curr.next.prev = prev;
    };

    if (curr === this.head) {
      this.count > 1 ? this.head = curr.next : this.head = null;
    };
    if (curr === this.tail) {
      this.count > 1 ? this.tail = prev : this.tail = null;
    };

    this.count--;

    return curr;
  }

  printList() {
    let node = this.head;
    let list = [];
    while (node != null) {
      list.push(node.value);
      node = node.next;
    }
    // console.log(list);
    return list;
  }
}
