var os = require('os');
require('colors');

var OSinfo = require('../modules/OSinfo');
var InstructionTime = require('../modules/InstructionTime');
var ParseSecondsToTime = require('../modules/ParseSecondsToTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function instruction() {
    var input = process.stdin.read();
      if(input !== null) {
          var instruction = input.trim();
          if(instruction ==='/exit') {
                  process.stdout.write('Quitting app!\n'.red);
                  process.exit();
              } else if (instruction === '/sayhello') {
                  process.stdout.write('hello!\n');
              } else if (instruction === '/getOSinfo') {
                  OSinfo.print();
              } else if (instruction != null && instruction.match('/format')) {
                    InstructionTime.instructionTime(instruction);
              } else {
                  process.stderr.write('Wrong instruction!\n');
          }
      }
  });
