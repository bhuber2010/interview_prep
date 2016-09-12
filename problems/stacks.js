export class Node {
  constructor(value){
    this.value = value
    this.previous = null
  }
}

export class Stack {
  constructor(){
    this.top = null
    this.length = 0;
  }

  push(node) {
    if (node instanceof Node) {
      node.previous = this.top
      this.top = node
      this.length += 1
    } else {
      throw new Error("that shit isn't a node bro!")
    }
  }

  pop() {
    if (this.length > 0) {
      var oldTop = this.top
      this.top = this.top.previous
      this.length -= 1
      return oldTop
    } else {
      throw new Error("Your Stack is empty")
    }
  }
}
