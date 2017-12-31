var os = require('os');

//odniesienie do nowego modułu
var OSinfo = require('../modules/OSinfo');
//var TimeConverter = require('../modules/TimeConverter');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null && input !== isNaN(input)) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
/*    else {
      TimeConverter.time();
    } */
});

//exports.program = input;
