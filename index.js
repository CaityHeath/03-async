'use strict';
const fs = require('fs');
const fileReader = require('./lib/reader-fixed.js');
console.log(fileReader);
// Obtain and assert input
let files = process.argv.slice(2);
console.log(files);


if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  console.log(data);
  console.log(`in fileReader`);
  if ( err ) { throw err; }
  console.log('From Callback:', data);
  
});
