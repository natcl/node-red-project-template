#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;

var args = process.argv.slice(2);
var command;

var fIndex = args.indexOf('-f');
if (fIndex > -1) {
    console.log('Forcing an npm install');
    const npm_install = exec('npm install -f');
    args.splice(fIndex, 1);
}

command = spawn('node', ['node_modules/node-red/red.js', '-v', '-userDir', '.'].concat(args));

command.stdout.on('data', (data) => {
    console.log(data.toString());
});

command.stderr.on('data', (data) => {
    console.log(data.toString());
});

command.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
