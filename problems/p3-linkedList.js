
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
    return {value: value};
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

    while(pos < position) {
      prev = curr;
      curr = curr.next;
      pos++;
    }

    if (pos != 1) {prev.next = curr.next};

    if (curr === this.head) {this.head = curr.next};
    if (curr === this.tail) {this.tail = prev};

    this.count--;

    return curr;
  }

  printList() {
    let node = this.head;
    while (node != null) {
      console.log(node.value);
      node = node.next;
    }
  }
}
