var upTime = require('../modules/upTime.js');

require("colors");

function format(uptime, hour, min, sec) {
  var time = {
    uptime: upTime.time()[0].green,
    hour: upTime.time()[1],
    min: upTime.time()[2],
    sec: upTime.time()[3]
  };

  process.stdout.write('Uptime is ' + time.uptime +': ' + time.hour + " hours(s), " + time.min + " minute(s) and " + time.sec +' second(s). \n');
}

/* inny sposób
function format(uptime, hour, min, sec) {
  var time = upTime.time();
  process.stdout.write('Uptime is ' + upTime.time()[0].green +': ' + upTime.time()[1] + " hours(s), " + upTime.time()[2] + " minute(s) and " + upTime.time()[3] +' second(s). \n');
}

*/
exports.timeFormat = format;
