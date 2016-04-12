import {linkedList} from '../../problems/p3-linkedList';
import * as chai from 'chai';
let should = chai.should();
let expect = chai.expect;

export function p3() {
  'use strict';

  describe('P3 - creating a linkedList, ', function(){

    describe('creates an empty linked list', function(){
      var emptyList = new linkedList();

      it('should have a count of 0', function(){
        emptyList.count.should.equal(0);
      })
      it('should have a head and tail set to null', function(){
        expect(emptyList.head).to.equal(null);
        expect(emptyList.tail).to.equal(null);
      })
    })

    describe('create a linked list with one node', function(){

      var aList = new linkedList({value: 5});

      it('should have a head equal to node.value', function(){
        aList.head.value.should.equal(5);
      })
      it('should have a tail equal to node.value', function(){
        aList.tail.value.should.equal(5);
      })

      it('should have a length equal to 1', function(){
        aList.count.should.equal(1);
      })
    })

    describe('add a node to the list', function(){

      var aList = new linkedList({value: 5});

      it('should set the tail to the value of the new node', function(){
        aList.addNode(6);
        aList.tail.value.should.equal(6);
      })

      it('should increase the count property (length) of the list', function(){
        aList.count.should.equal(2);
      })

    })

    describe('finds a node gien a position in the list', function(){

      var aList = new linkedList({value: 5});

      it('should return the only node with value 5', function(){
        aList.searchForNode(1).value.should.equal(5);
      })

      aList.addNode(6);

      it('should return the value of the new node added', function(){
        aList.searchForNode(2).value.should.equal(6);
      })

      aList.addNode(7);

      it('should return the value of the first node added', function(){
        aList.searchForNode(2).value.should.equal(6);
      })
    })

    describe('removing a node from the list', function(){

      var aList;

      beforeEach(function() {
        aList = new linkedList({value: 5});
        aList.addNode(6);
        aList.addNode(7);
        aList.addNode(8);
      });

      it('should remove the first node in the list', function(){
        aList.removeNode(1);
        aList.head.value.should.equal(6);
        aList.searchForNode(1).value.should.equal(6);
      })

      it('should remove the last node in the list', function(){
        aList.removeNode(aList.count).value.should.equal(8);
        aList.tail.value.should.equal(7);
        aList.count.should.equal(3);
      })
    })

  })
}
