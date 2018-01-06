var program = require('../app/program');

function timeConvert(instruction) {

//console.log(instruction);

var number = instruction.slice(7);

console.log(number +' sec');
//console.log(isNaN(number));

        var sec = 0;
        var min = 0;
        var hour = 0;

    if(number !== null && isNaN(number)) {
      process.stdout.write("It is not a number - try again! \n");
    }   else {
        if(number < 60) {
            sec = number % 60;
            process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
          } else if (number >=60 && number < 3600) {
              sec = number % 60;
              min = ((number - sec) % 3600) /60;
              process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
           } else if (number >= 3600) {
              sec = number % 60;
              min = ((number - sec) % 3600) /60;
              hour = (number - (min *60 + sec)) / 3600;
              process.stdout.write('Entered time is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');

         }
    }
}

exports.time = timeConvert;
