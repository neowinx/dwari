'use strict';
const config = require('./config');
const chalk = require('chalk');
const robot = require("robotjs");

console.log('starting ' + chalk.yellow(config.hook) + '\n');

var interval;

if(config.hook === 'iohook') {
  const ioHook = require('iohook');  
  
  ioHook.on("mousedown", event => {
    if(event.button === 4) {
      interval = setInterval(() => robot.mouseClick("left"), 100)
    }
  });

  ioHook.on("mouseup", event => {
    if(event.button === 4) {
      clearInterval(interval)
    }
  });

  ioHook.start();
}

console.log(`\nI am ready to rumble ${chalk.bold.greenBright('Dwari')}!\n`);
console.log(`${chalk.green('Mouse 4')} -> Auto Click`);