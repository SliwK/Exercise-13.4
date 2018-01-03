var upTime = require('../modules/upTime.js');
//var timeFormater = require('../modules/instructionTime.js');
require("colors");

function format(uptime, hour, min, sec) {
  var time = upTime.time();
  process.stdout.write('Uptime is ' + upTime.time()[0].green +': ' + upTime.time()[1] + " hours(s), " + upTime.time()[2] + " minute(s) and " + upTime.time()[3] +' second(s). \n');
}

exports.timeFormat = format;
