'use strict';

const fs = require('fs');
const util = require('util');

let files = `./files/${process.argv[2]}`;


fs.readFile(files, (err, data) =>{
  if(err){throw err;}

  fs.writeFile(files, Math.floor(Math.random() * 100), err=>{
    if(err){throw err;}
  });
});
