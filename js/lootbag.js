#!/usr/bin/env node

'use strict';

// require('./setup');

process.title = 'LootBag';

const { argv: [,, ...args] } = process;
const { child, action, toy, status } = require('./parse-args')(args);
const { addChild, addToy } = require('./actions');

const { Database } = require('sqlite3').verbose();
const db = new Database('lootbag.sqlite');

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

if (action === 'add') {
  addChild(child);
  
}


db.close(err => {
  errorHandler(err); // Use custom error handling function
});