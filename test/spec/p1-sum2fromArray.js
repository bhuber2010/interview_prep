import {sumArray} from '../../problems/p1-sum2fromArray';
import * as chai from 'chai';
let should = chai.should();

export function p1() {
  'use strict';


  describe('P1 - Sum two numbers from array to equal desired result', function () {

    describe('cases when it should return false', function () {
      it('should return false as sum is impossible', function () {
        sumArray([1,2,3], 10).should.equal(false);
      });
      it('should return false, there is no combination', function(){
        sumArray([6, 4, 9, 2, 1], 4).should.equal(false);
      })
    });
    describe('cases when it should return the two numbers that sum to the result (or true)', function(){
      it('should return true, 1 + 3 = 4', function(){
        sumArray([1,2,3], 4).should.equal("1 + 3 = 4");
      });
      it('should return true, 4 + 1 = 5', function(){
        sumArray([6, 4, 9, 2, 1], 5).should.equal("4 + 1 = 5");
      });
      it('should return true, 2 + 2 = 4', function(){
        sumArray([2, 4, 9, 2, 1], 4).should.equal("2 + 2 = 4");
      });
    });
  });
}
