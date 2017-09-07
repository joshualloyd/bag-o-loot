'use strict';

const { assert: { isFunction, isObject, hasAllKeys, propertyVal, deepEqual } } = require('chai');
const parseArgs = require('../js/parse-args');

describe('testing parse-args module', () => {
  describe('testing exports()', () => {

    it('should exist', () => {
      isFunction(parseArgs);
    });

    it('should return an object', () => {
      let testArgsArr = ['add', 'kite', 'suzy'];
      let result = parseArgs(testArgsArr);
      isObject(result);
    });

    it('should return an object with action, toy, child, and status properties', () => {
      let testArgsArr = ['add', 'kite', 'suzy'];
      let result = parseArgs(testArgsArr);
      hasAllKeys(result, ['action', 'toy', 'child', 'status']);
    });

    it('should return an object with expected action, toy, child, and status properties and values', () => {
      let testArgsArr = ['add', 'kite', 'suzy'];
      let result = parseArgs(testArgsArr);
      let expected = {action: 'add', toy: 'kite', child: 'suzy', status: 0};
      deepEqual(result, expected);
    });

    it('should return an object with expected status property', () => {
      let testArgsArr = ['add', 'kite', 'suzy'];
      let result = parseArgs(testArgsArr);
      propertyVal(result, 'status', 0);
    });

  });
});