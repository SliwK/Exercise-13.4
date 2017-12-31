//var os = require('os');
//var program = require('../app/program');


process.stdin.setEncoding('utf-8');
process.stdin.on('readable',


function timeConvert() {

        var input = process.stdin.read();


        var instruction = input;
        var sec = 0;
        var min = 0;
        var hour = 0;

        if(instruction < 60) {
            sec = instruction;
            process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
          } else if (instruction >=60 && instruction < 3600) {
              min = (instruction/60).toFixed(0);
              sec = instruction - min*60;
              process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
           } else if (instruction >= 3600) {
              hour = (instruction / 3600 ).toFixed(0);
              min = ((instruction - hour * 3600) / 60).toFixed(0);
              sec = (instruction - hour * 3600 - min * 60);
              //problem z dzieleniem - wyniki są zaokrąglane przez co czasami wychodzą ujemne sekundy czy minuty... :(
              process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');

         }

});
//exports.time = timeConvert;
