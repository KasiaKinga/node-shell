// const fs = require('fs');


process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});


const pwd = require('./pwd');
const ls = require('./ls');

pwd()
ls()


