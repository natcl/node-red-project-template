#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;

var args = process.argv;
var port = parseInt(args[2]);
var command;

if (args.find(a => a === '-f')) {
  const npm_install = exec('npm install -f');
}

if (port) {
  command = spawn('node', ['node_modules/node-red/red.js', '-v', '-p', port, '-userDir', '.']);
}
else {
  command = spawn('node', ['node_modules/node-red/red.js', '-v', '-userDir', '.']);
}

command.stdout.on('data', (data) => {
  console.log(data.toString());
});

command.stderr.on('data', (data) => {
  console.log(data.toString());
});

command.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
