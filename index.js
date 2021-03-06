'use strict';

const fileReader = require('./lib/reader-fixed.js');
console.log(fileReader);
// Obtain and assert input
let files = process.argv.slice(2);


if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
