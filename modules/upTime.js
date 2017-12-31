var os = require('os');

//process.stdin.setEncoding('utf-8');
//process.stdin.on('readable',
function timeConvert() {

        var uptime = os.uptime();
        var sec = 0;
        var min = 0;
        var hour = 0;

console.log(uptime);

        if(uptime < 60) {
            sec = uptime;
            process.stdout.write('Uptime is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
          } else if (uptime >=60 && uptime < 3600) {
              min = (uptime/60).toFixed(0);
              sec = uptime - min*60;
              process.stdout.write('Uptime is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');
           } else if (uptime >= 3600) {
              hour = (uptime / 3600 ).toFixed(0);
              min = ((uptime - hour * 3600) / 60).toFixed(0);
              sec = (uptime - hour * 3600 - min * 60);
              //problem z dzieleniem - wyniki są zaokrąglane przez co czasami wychodzą ujemne sekundy czy minuty... :(
              process.stdout.write('Uptime is: ' + hour + " hours(s), " + min + " minute(s) and " + sec +' second(s). \n');

         }

}

exports.time = timeConvert;
