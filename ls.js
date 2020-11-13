const { readdir } = require("fs")

module.exports = function() {
  fs.readdir('./', 'utf8', (err, files) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  // process.stdin.on('data', (data) => {

  //   process.stdout.write(process.cwd());
  //   process.stdout.write('\nprompt > ');
  })
}
  
