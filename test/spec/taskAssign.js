import {smartAssigning} from '../../problems/p2-asanaTaskAssign';
import * as chai from 'chai';
let should = chai.should();

export function p2() {
  'use strict';
  describe('P2 - Given list of people, returns person with greatest availability', function() {
    describe('cases with less than 10 tasks', function(){
      it('should return Martin', function(){
        smartAssigning([["John","1","2","6"], ["Martin","1","1","5"]]).should.equal("Martin");
      })
    })
    describe('cases with more than 10 tasks', function(){
      it('should return John', function(){
        smartAssigning([["John","1","2","6"], ["Martin","1","1","10"]]).should.equal("John");
      })
    })
  })
}
