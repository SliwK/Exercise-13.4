var program = require('../app/program');
var ParseSecondsToTime = require('../modules/ParseSecondsToTime');

function instructionTime(instruction) {

    var number = instruction.slice(7);

    if(number !== null && isNaN(number)) {
      process.stdout.write("It is not a number - try again! \n");
    }   else {
        var seconds = number;
        ParseSecondsToTime.parseSecondsToTime(seconds);
         }
}


exports.instructionTime = instructionTime;
