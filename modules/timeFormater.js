var upTime = require('../modules/upTime.js');
var instructionTime = require('../modules/instructionTime.js');

require("colors");

function getFormatSec(uptime, hour, min, sec) {
  var time = {
    uptime: instructionTime.convertedTime()[0],
    hour: instructionTime.convertedTime()[1],
    min: instructionTime.convertedTime()[2],
    sec: instructionTime.convertedTime()[3]
  };
  process.stdout.write('Inserded time is: '.red + time.hour + " hours(s), " + time.min + " minute(s) and " + time.sec +' second(s). \n');

}

function getFormat(uptime, hour, min, sec) {
  var time = {
    uptime: upTime.systemUpTime()[0].green,
    hour: upTime.systemUpTime()[1],
    min: upTime.systemUpTime()[2],
    sec: upTime.systemUpTime()[3]
  };

  process.stdout.write('Uptime is ' + time.uptime +': ' + time.hour + " hours(s), " + time.min + " minute(s) and " + time.sec +' second(s). \n');
}

/* inny sposób dla upTime
function format(uptime, hour, min, sec) {
  var time = upTime.time();
  process.stdout.write('Uptime is ' + upTime.time()[0].green +': ' + upTime.time()[1] + " hours(s), " + upTime.time()[2] + " minute(s) and " + upTime.time()[3] +' second(s). \n');
}

*/
exports.timeFormat = getFormat;
exports.timeFormatSec = getFormatSec; //da sie ustawić dwa wyjścia ?
