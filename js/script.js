// Declaring Constants

const workButton = document.getElementById('workButton');
const sleepButton = document.getElementById('sleepButton');
const generalButton = document.getElementById('generalButton');
const readingButton = document.getElementById('readingButton');
const socialButton = document.getElementById('socialButton');
const personalButton = document.getElementById('personalButton');
const bufferButton = document.getElementById('bufferButton');

// Main Min Counter

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
        socialButton.innerHTML = 'Social';
        socialButton.style.background = 'red';

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


// Default Time Set

document.getElementById("workTime").innerHTML = 666;
document.getElementById("sleepTime").innerHTML = 420;
document.getElementById("generalTime").innerHTML = 120;
document.getElementById("readingTime").innerHTML = 60;
document.getElementById("socialTime").innerHTML = 54;
document.getElementById("personalTime").innerHTML = 60;
document.getElementById("bufferTime").innerHTML = 60;


// Wrok Counter

function workCounter() {
    var status = workButton.innerText;
    if (status == 'Work Time') {
        var workTime = document.getElementById("workTime").innerHTML;
        workTime = workTime - 1;
        document.getElementById("workTime").innerHTML = workTime;

    } else {
        var work = document.getElementById("workTime").innerHTML;
        document.getElementById("workTime").innerHTML = work;
    }
}
setInterval(workCounter, 6000);


// Sleep Counter

function sleepCounter() {
    var status = sleepButton.innerText;
    if (status == 'Sleep Time') {
        var sleepTime = document.getElementById("sleepTime").innerHTML;
        sleepTime = sleepTime - 1;
        document.getElementById("sleepTime").innerHTML = sleepTime;

    } else {
        var sleep = document.getElementById("sleepTime").innerHTML;
        document.getElementById("sleepTime").innerHTML = sleep;
    }
}
setInterval(sleepCounter, 6000);


// General Counter

function generalCounter() {
    var status = generalButton.innerText;
    if (status == 'General Time') {
        var generalTime = document.getElementById("generalTime").innerHTML;
        generalTime = generalTime - 1;
        document.getElementById("generalTime").innerHTML = generalTime;

    } else {
        var general = document.getElementById("generalTime").innerHTML;
        document.getElementById("generalTime").innerHTML = general;
    }
}
setInterval(generalCounter, 6000);


// Reading Counter

function readingCounter() {
    var status = readingButton.innerText;
    if (status == 'Reading Time') {
        var readingTime = document.getElementById("readingTime").innerHTML;
        readingTime = readingTime - 1;
        document.getElementById("readingTime").innerHTML = readingTime;

    } else {
        var reading = document.getElementById("readingTime").innerHTML;
        document.getElementById("readingTime").innerHTML = reading;
    }
}
setInterval(readingCounter, 6000);


// Social Counter

function socialCounter() {
    var status = socialButton.innerText;
    if (status == 'Social Time') {
        var socialTime = document.getElementById("socialTime").innerHTML;
        socialTime = socialTime - 1;
        document.getElementById("socialTime").innerHTML = socialTime;

    } else {
        var social = document.getElementById("socialTime").innerHTML;
        document.getElementById("socialTime").innerHTML = social;
    }
}
setInterval(socialCounter, 6000);


// Personal Counter

function personalCounter() {
    var status = personalButton.innerText;
    if (status == 'Personal Time') {
        var personalTime = document.getElementById("personalTime").innerHTML;
        personalTime = personalTime - 1;
        document.getElementById("personalTime").innerHTML = personalTime;

    } else {
        var personal = document.getElementById("personalTime").innerHTML;
        document.getElementById("personalTime").innerHTML = personal;
    }
}
setInterval(personalCounter, 6000);


// Buffer Counter

function bufferCounter() {
    var status = bufferButton.innerText;
    if (status == 'Buffer Time') {
        var bufferTime = document.getElementById("bufferTime").innerHTML;
        bufferTime = bufferTime - 1;
        document.getElementById("bufferTime").innerHTML = bufferTime;

    } else {
        var buffer = document.getElementById("bufferTime").innerHTML;
        document.getElementById("bufferTime").innerHTML = buffer;
    }
}
setInterval(bufferCounter, 6000);
