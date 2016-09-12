export class Node {
  constructor(value){
    this.value = value
    this.next = null
    this.previous = null
  }
}

export class Queue {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(node) {
    if (node instanceof Node) {
      node.next = this.tail
      this.tail.previous = node
      this.tail = node
      this.length += 1
    } else {
      throw new Error("that shit isn't a node bro!")
    }
  }

  dequeue() {
    if (this.length > 0) {
      var oldHead = this.head
      this.head = this.head.previous
      this.length -= 1
      return oldHead
    } else {
      throw new Error("Your Queue is empty")
    }
  }
}
