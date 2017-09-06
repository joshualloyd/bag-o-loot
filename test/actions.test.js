'use strict';

const { assert: { isFunction, isObject, hasAllKeys, propertyVal, deepEqual } } = require('chai');
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
  });
});