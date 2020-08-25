// Main Counter Start



function minCounter() {
    var now = new moment();
    var s = now.format("ss");
    var h = now.format("HH");
    var m = now.format("mm");
    var minGone = ((h*60) + Number(m));
    var minLeft = 1440 - Number(minGone);
    var inSec = 60 - Number(s);
    document.getElementById("time").innerHTML = minGone + ':' + s;
    document.getElementById("left").innerHTML = minLeft + ':' + inSec;
}

setInterval(minCounter, 500);

// Main Counter End

// Time Sections

var work = 666;
var sleep = 420;
var general = 120;
var reading = 60;
var socialMedia = 54;
var personal = 60;
var buffer = 60;

document.getElementById("work").innerHTML = 'Work Min Left: ' + work;
document.getElementById("sleep").innerHTML = 'Sleep Min Left: ' + sleep;
document.getElementById("general").innerHTML = 'GeneralMin Left: ' + general;
document.getElementById("reading").innerHTML = 'Reading Min Left: ' + reading;
document.getElementById("socialMedia").innerHTML = 'Social MediaMin Left: ' + socialMedia;
document.getElementById("personal").innerHTML = 'Perosonal Min Left: ' + personal;
document.getElementById("buffer").innerHTML = 'Buffer Min Left: ' + buffer;

