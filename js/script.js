// Main Counter Start



function minCounter() {
    var now = new moment();
    var s = now.format("ss");
    var h = now.format("HH");
    var m = now.format("mm");
    var minGone = ((h * 60) + Number(m));
    var minLeft = 1440 - Number(minGone);
    var inSec = 60 - Number(s);
    document.getElementById("time").innerHTML = minGone + ':' + s;
    document.getElementById("left").innerHTML = minLeft + ':' + inSec;
}

setInterval(minCounter, 500);

// Main Counter End

// Function Section

var work = 666;
var sleep = 420;
var general = 120;
var reading = 60;
var socialMedia = 54;
var personal = 60;
var buffer = 60;
var working = 0;

// Toggle Functions

function Work() {
    var status = document.getElementById('workButton').innerText;
    if ( status == "Work") {
        document.getElementById('workButton').innerHTML = 'Work Time';
        document.getElementById('workButton').style.background = 'green';

    } else if (status == "Work Time") {
        document.getElementById('workButton').innerHTML = 'Work';
        document.getElementById('workButton').style.background = 'red';

    }
}

function Sleep() {
    var status = document.getElementById('sleepButton').innerText;
    if ( status == "Sleep") {
        document.getElementById('sleepButton').innerHTML = 'Sleep Time';
        document.getElementById('sleepButton').style.background = 'green';

    } else if (status == "Sleep Time") {
        document.getElementById('sleepButton').innerHTML = 'Sleep';
        document.getElementById('sleepButton').style.background = 'red';

    }
}

function General() {
    var status = document.getElementById('generalButton').innerText;
    if ( status == "General") {
        document.getElementById('generalButton').innerHTML = 'General Time';
        document.getElementById('generalButton').style.background = 'green';

    } else if (status == "General Time") {
        document.getElementById('generalButton').innerHTML = 'General';
        document.getElementById('generalButton').style.background = 'red';

    }
}

function Reading() {
    var status = document.getElementById('readingButton').innerText;
    if ( status == "Reading") {
        document.getElementById('readingButton').innerHTML = 'Reading Time';
        document.getElementById('readingButton').style.background = 'green';

    } else if (status == "Reading Time") {
        document.getElementById('readingButton').innerHTML = 'Read';
        document.getElementById('readingButton').style.background = 'red';

    }
}

function SocialMedia() {
    var status = document.getElementById('socialMediaButton').innerText;
    if ( status == "Social Media") {
        document.getElementById('socialMediaButton').innerHTML = 'Social Media Time';
        document.getElementById('socialMediaButton').style.background = 'green';

    } else if (status == "Social Media Time") {
        document.getElementById('socialMediaButton').innerHTML = 'Social Media';
        document.getElementById('socialMediaButton').style.background = 'red';

    }
}

function Personal() {
    var status = document.getElementById('personalButton').innerText;
    if ( status == "Personal") {
        document.getElementById('personalButton').innerHTML = 'Personal Time';
        document.getElementById('personalButton').style.background = 'green';

    } else if (status == "Personal Time") {
        document.getElementById('personalButton').innerHTML = 'Personal';
        document.getElementById('personalButton').style.background = 'red';

    }
}

function Buffer() {
    var status = document.getElementById('bufferButton').innerText;
    if ( status == "Buffer") {
        document.getElementById('bufferButton').innerHTML = 'Buffer Time';
        document.getElementById('bufferButton').style.background = 'green';

    } else if (status == "Buffer Time") {
        document.getElementById('bufferButton').innerHTML = 'Buffer';
        document.getElementById('bufferButton').style.background = 'red';

    }
}



// Time Sections

document.getElementById("work").innerHTML = 'Work Min Left: ' + work;
document.getElementById("sleep").innerHTML = 'Sleep Min Left: ' + sleep;
document.getElementById("general").innerHTML = 'General Min Left: ' + general;
document.getElementById("reading").innerHTML = 'Reading Min Left: ' + reading;
document.getElementById("socialMedia").innerHTML = 'Social MediaMin Left: ' + socialMedia;
document.getElementById("personal").innerHTML = 'Perosonal Min Left: ' + personal;
document.getElementById("buffer").innerHTML = 'Buffer Min Left: ' + buffer;
