'use strict';

const fs = require('fs');
const util = require('util');

let files = `./files/${process.argv[2]}`;

console.log(files);

fs.readFile(files, (err, data) =>{
  if(err){throw err;}
  console.log(data.toString());
});

