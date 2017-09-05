'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('lootbag.sqlite');

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

module.exports.addChild = (childName) => {

  console.log('childname', childName);

  db.run(`INSERT INTO children VALUES (null, '${childName}', 0)`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
      console.log('last ID', this.lastID, 'changes', this.changes, 'this', this);
  });

};

module.exports.addToy = (childId, toy) => {
  
  db.run(`INSERT INTO toys VALUES (null, ${childId}, '${toy}')`, [], function(err) {
    if (err) {
      errorHandler(err);
    } else {
      console.log('toy and child added');
    }
  });

};
