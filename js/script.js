// Main Counter Start

const workButton = document.getElementById('workButton');
const sleepButton = document.getElementById('sleepButton');
const generalButton = document.getElementById('generalButton');
const readingButton = document.getElementById('readingButton');
const socialButton = document.getElementById('socialButton');
const personalButton = document.getElementById('personalButton');
const bufferButton = document.getElementById('bufferButton');

//var work = 666;
var sleep = 420;
var general = 120;
var reading = 60;
var socialMedia = 54;
var personal = 60;
var buffer = 60;
var working = 0;

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

//Time Sections
document.getElementById("workTime").innerHTML = 666;
function workCounter() {
    
    var now = new moment();
    var m = now.format("mm");
    var status = workButton.innerText;
    if (status == 'Work Time') {
        var work = 666;
        var work = work - Number(m);
        document.getElementById("workTime").innerHTML = work;
    } else {
        var work = document.getElementById("workTime").innerHTML;
        document.getElementById("workTime").innerHTML = work;
    }
}
setInterval(workCounter, 500);
//setTimeout(workCounter, 10000);






document.getElementById("sleep").innerHTML = 'Sleep Min Left: ' + sleep;
document.getElementById("general").innerHTML = 'General Min Left: ' + general;
document.getElementById("reading").innerHTML = 'Reading Min Left: ' + reading;
document.getElementById("socialMedia").innerHTML = 'SocialMin Left: ' + socialMedia;
document.getElementById("personal").innerHTML = 'Perosonal Min Left: ' + personal;
document.getElementById("buffer").innerHTML = 'Buffer Min Left: ' + buffer;


// Function Section



// Toggle Functions

function Work() {
    var status = workButton.innerText;
    if (status == "Work") {

        workButton.innerHTML = 'Work Time';
        workButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';


    } else if (status == "Work Time") {
        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

    }
}

function Sleep() {
    var status = sleepButton.innerText;
    if (status == "Sleep") {

        sleepButton.innerHTML = 'Sleep Time';
        sleepButton.style.background = 'green';

        // Toggle Other Button

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    } else if (status == "Sleep Time") {
        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

    }
}

function General() {
    var status = generalButton.innerText;
    if (status == "General") {

        generalButton.innerHTML = 'General Time';
        generalButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    } else if (status == "General Time") {
        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

    }
}

function Reading() {
    var status = readingButton.innerText;
    if (status == "Reading") {

        readingButton.innerHTML = 'Reading Time';
        readingButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    } else if (status == "Reading Time") {
        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

    }
}

function Social() {
    var status = socialButton.innerText;
    if (status == "Social") {

        socialButton.innerHTML = 'Social Time';
        socialButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    } else if (status == "Social Time") {
        generalButton.innerHTML = 'Social';
        generalButton.style.background = 'red';

    }
}


function Personal() {
    var status = personalButton.innerText;
    if (status == "Personal") {

        personalButton.innerHTML = 'Personal Time';
        personalButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    } else if (status == "Personal Time") {
        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

    }
}


function Buffer() {
    var status = bufferButton.innerText;
    if (status == "Buffer") {

        bufferButton.innerHTML = 'Buffer Time';
        bufferButton.style.background = 'green';

        // Toggle Other Button

        sleepButton.innerHTML = 'Sleep';
        sleepButton.style.background = 'red';

        workButton.innerHTML = 'Work';
        workButton.style.background = 'red';

        generalButton.innerHTML = 'General';
        generalButton.style.background = 'red';

        readingButton.innerHTML = 'Reading';
        readingButton.style.background = 'red';

        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

        personalButton.innerHTML = 'Personal';
        personalButton.style.background = 'red';

    } else if (status == "Buffer Time") {
        bufferButton.innerHTML = 'Buffer';
        bufferButton.style.background = 'red';

    }
}
