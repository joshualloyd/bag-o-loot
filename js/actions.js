'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('lootbag.sqlite');

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

module.exports.addChild = (childName, toy, callback) => {

  db.run(`INSERT INTO children VALUES (null, '${childName}', 0)`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
      console.log('child added', this.lastID);
      callback ? callback(this.lastID, toy) : null;
  });
};

module.exports.addToy = (childId, toy) => {
  db.run(`INSERT INTO toys VALUES (null, ${childId}, '${toy}')`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
      console.log('toy added to child', this.lastID);
  });
};

module.exports.removeChild = () => {
  db.run(`DELETE FROM children WHERE childName = '${childName}'`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
      console.log('child removed', this.lastID);
      callback ? callback(this.lastID, toy) : null;
  });
};

module.exports.removeToy = () => {

};

module.exports.getToy = () => {

};

module.exports.getChild = () => {

};

module.exports.getChildren = () => {

};

module.exports.getToysByChild = () => {
  
};