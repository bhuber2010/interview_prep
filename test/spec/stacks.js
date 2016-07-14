import {Stack, Node} from '../../problems/stacks';
import * as chai from 'chai';
let should = chai.should();
let expect = chai.expect;

export function testStacks() {
  'use strict';
  var stack;

  describe('Creating a stack, ', function(){
    beforeEach(function(){
      stack = new Stack()
    })

    describe('creates an empty stack', function(){
      console.log("fisrt set works");

      it('should have a length of 0', function(){
        stack.length.should.equal(0);
      })
      it('should have a top of null', function(){
        expect(stack.top).to.equal(null)
      })
    })

    describe('push a new node to the stack', function(){
      beforeEach(function(){
        stack.push(new Node("first"))
      })

      it('should have a length of 1', function(){
        stack.length.should.equal(1)
      })
      it('should have top equal to the new node', function(){
        expect(stack.top.value).to.equal("first")
        expect(stack.top.previous).to.equal(null)
      })
    })

    describe('poping a node off the stack', function(){
      beforeEach(function(){
        stack.push(new Node("first"))
        stack.push(new Node("second"))
      })

      it('should start with a length of 2', function(){
        stack.length.should.equal(2)
      })

      it('should return the top node called second', function(){
        expect(stack.pop().value).to.equal("second")
      })

      it('should have a new length equal to 1', function(){
        stack.pop()
        stack.length.should.equal(1)
      })
    })
  })
}
