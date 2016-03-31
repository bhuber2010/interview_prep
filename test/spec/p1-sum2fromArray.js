import {sumArray} from '../../problems/p1-sum2fromArray';
import * as chai from 'chai';
let should = chai.should();

export function p1() {
  'use strict';


  describe('P1 - Add, Subtract, or Multiply two numbers from array to equal desired result', function () {

    describe('cases when it should return false', function () {
      it('should return false as all operations are impossible', function () {
        sumArray([1,2,3], 10).should.equal(false);
      });
    });
    describe('cases when it should return the two numbers that sum to the result (or true)', function(){
      it('should return true, 1 + 3 = 4', function(){
        var test2 = sumArray([1,2,3], 4);
        test2.sum.should.equal("1 + 3 = 4");
        test2.subtract.length.should.equal(0);
        test2.multiply.should.equal(false);
      });
      it('should return true, 4 + 1 = 5', function(){
        var test3 = sumArray([6, 4, 9, 2, 1], 5);
        test3.sum.should.equal("4 + 1 = 5");
        test3.subtract.should.equal(["6 - 1 = 5", "9 - 4 = 5"]);
        test3.multiply.should.equal(false);
      });
      xit('should return true, 2 + 2 = 4', function(){
        sumArray([2, 4, 9, 2, 1], 4).should.equal("2 + 2 = 4");
      });
      it('should return true, 6 - 2 = 4', function(){
        sumArray([6, 4, 9, 2, 1], 4).subtract.should.equal(["6 - 2 = 4"]);
      })
    });
  });
}
