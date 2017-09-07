#!/usr/bin/env node

'use strict';

// require('./setup');

process.title = 'LootBag';

const { argv: [,, ...args] } = process;
const { child, action, toy, status } = require('./parse-args')(args);
const { addChild, addToy, removeChild, removeToy, getChild, getToy, getChildren, getToysByChild } = require('./actions');

const { Database } = require('sqlite3').verbose();
const db = new Database('lootbag.sqlite');

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

// Items can be added to bag.
if (action === 'add') {
  addChild(child, (dataFromAddChild)=>{
    addToy(dataFromAddChild, toy, (dataFromAddToy)=>{
      console.log(`${child} is getting a ${dataFromAddToy.toy}`);
    });
  });
}

// Must be able to list all toys for a given child's name.
if (action === 'ls' && child) {
  getChild(child, (dataFromGetChild)=>{
    getToysByChild(dataFromGetChild, (dataFromGetToysByChild)=>{
      dataFromGetToysByChild.forEach((toyRow)=>{
        console.log(`${child} will get a ${toyRow.toy}`);
      });
    });
  });
}

// Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
// Must be able to list all children who are getting a toy.
// Must be able to set the delivered property of a child, which defaults to false to true.


db.close(err => {
  errorHandler(err); // Use custom error handling function
});

