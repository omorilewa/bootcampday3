'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/missingnumber.js');

describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(myApp.findMissing([], [])).to.eql(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(myApp.findMissing([2], [2])).to.eql(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(myApp.findMissing([4], [4])).to.eql(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(myApp.findMissing([7], [7])).to.eql(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(myApp.findMissing([1, 2], [1, 2, 5])).to.eql(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(myApp.findMissing([4, 6, 8], [4, 6, 8, 10])).to.eql(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).to.eql(1);
    });

  });

});

