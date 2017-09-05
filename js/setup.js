#!/usr/bin/env node

'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('lootbag.sqlite', () => console.log('Connected!'));

const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

db.run('CREATE TABLE IF NOT EXISTS children (id INT, childName TEXT, status INT);', [], (err) => {
  if (err) {
    errorHandler(err);
  } else {
    console.log('chilren table added');
  }
});

db.run('CREATE TABLE IF NOT EXISTS toys (id INT, childId INT, toy TEXT);', [], (err) => {
  if (err) {
    errorHandler(err);
  } else {
    console.log('toys table added');
  }
});

db.close(err => {
  errorHandler(err); // Use custom error handling function
  console.log('Database closed'); // Will only log on successful close
});