var os = require('os');

var uptime = os.uptime().toFixed();
var sec = 0;
var min = 0;
var hour = 0;

function getUpTime() {

        if(uptime < 60) {
            sec = (uptime % 60).toFlat();
          } else if (uptime >=60 && uptime < 3600) {
              sec = uptime % 60;
              min = ((uptime - sec) % 3600) /60;
           } else if (uptime >= 3600) {
              sec = uptime % 60;
              min = ((uptime - sec) % 3600) /60;
              hour = (uptime - (min *60 + sec)) / 3600;
         }
         return [uptime, hour, min, sec];
}

exports.systemUpTime = getUpTime;
