'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('lootbag.sqlite');

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

module.exports.addChild = (childName, callback) => {

  db.run(`INSERT INTO children VALUES (null, '${childName}', 0)`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
      // console.log('child added', this.lastID);
    return callback(this.lastID);
      // callback ? callback(this.lastID, toy) : null;
  });
};

module.exports.addToy = (childId, toy, callback) => {
  db.run(`INSERT INTO toys VALUES (null, ${childId}, '${toy}')`, [], function(err) {
    if (err) {
      errorHandler(err);
    } 
    // console.log('toy added to child', this.lastID);
    return callback({toy: toy});
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

module.exports.getChild = (childName, callback) => {
  db.get(`SELECT * FROM children WHERE childName = '${childName}'`, [], function(err, row) {
    if (err) {
      errorHandler(err);
    }
    return callback(row.id);
  });
};

module.exports.getChildren = () => {

};

module.exports.getToysByChild = (childId, callback) => {
  db.all(`SELECT * FROM toys WHERE childId = ${childId}`, [], function(err, rows) {
    if (err) {
      errorHandler(err);
    }
    return callback(rows);
  });
};