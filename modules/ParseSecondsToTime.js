var upTime = require('../modules/UpTime.js');
var instructionTime = require('../modules/InstructionTime.js');


function parseSecondsToTime(seconds) {

        var sec = 0;
        var min = 0;
        var hour = 0;

        if(seconds < 60) {
            sec = (seconds % 60).toFlat();
          } else if (seconds >=60 && seconds < 3600) {
              sec = seconds % 60;
              min = ((seconds - sec) % 3600) /60;
           } else if (seconds >= 3600) {
              sec = seconds % 60;
              min = ((seconds - sec) % 3600) /60;
              hour = (seconds - (min *60 + sec)) / 3600;
         }
         process.stdout.write('Time is : ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');

}


exports.parseSecondsToTime = parseSecondsToTime;
