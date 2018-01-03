var program = require('../app/program');

function timeConvert() {

//    console.log("Enter number you want to convert:");

          var number = process.stdin.read();  //jak do tego dodać część insrukcji /format 12345 skoro wszystko co jest różne od /format to błąd??
                                              //a jeśli nie da sie tak to jak odpalic kolejny proces z nasłuchiwaniem żeby działał tylko dla tego modułu?
//        console.log(number);

        var sec = 0;
        var min = 0;
        var hour = 0;

    if(number !== null && number == isNaN) {
      process.stdout.write("It is not a number - try again!");
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
