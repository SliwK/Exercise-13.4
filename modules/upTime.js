var os = require('os');
var ParseSecondsToTime = require('../modules/ParseSecondsToTime');

function upTime(){

var uptime = os.uptime().toFixed();
var seconds = uptime;
//console.log(seconds);

ParseSecondsToTime.parseSecondsToTime(seconds);

}

exports.upTime = upTime;
