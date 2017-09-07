'use strict';

const { assert: { isFunction, isObject, hasAllKeys, propertyVal, deepEqual, isNumber, isArray } } = require('chai');
const { addChild, removeChild, addToy, removeToy, getChild, getToy, getChildren, getToysByChild } = require('../js/actions');

describe('testing actions module', () => {
  describe('testing addChild()', () => {
    it('should exist', () => {
      isFunction(addChild);
    });
  });
  describe('testing removeChild()', () => {
    it('should exist', () => {
      isFunction(removeChild);
    });
  });
  describe('testing addToy()', () => {
    it('should exist', () => {
      isFunction(addToy);
    });
  });
  describe('testing removeToy()', () => {
    it('should exist', () => {
      isFunction(removeToy);
    });
  });
  describe('testing getChild()', () => {
    it('should exist', () => {
      isFunction(getChild);
    });
    it('should return a child id when passed a child name', () => {
      getChild('suzy', (dataFromGetChild)=>{
        isNumber(dataFromGetChild);
      });
    });
  });
  describe('testing getToy()', () => {
    it('should exist', () => {
      isFunction(getToy);
    });
  });
  describe('testing getChildren()', () => {
    it('should exist', () => {
      isFunction(getChildren);
    });
  });
  describe('testing getToysByChild()', () => {
    it('should exist', () => {
      isFunction(getToysByChild);
    });
    it('should return an array of toys when passed a childId', () => {
      getToysByChild(1, (dataFromGetToysByChild)=>{
        isArray(dataFromGetToysByChild);
      });
    });
  });
});