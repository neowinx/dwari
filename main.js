'use strict';
const config = require('./config');
const chalk = require('chalk');
const robot = require("robotjs");

console.log(chalk.yellow(config.hook) + ' hook registered.\n');

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

