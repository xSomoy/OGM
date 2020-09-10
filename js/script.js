// Declaring Constants

const workButton = document.getElementById('workButton');
const sleepButton = document.getElementById('sleepButton');
const generalButton = document.getElementById('generalButton');
const readingButton = document.getElementById('readingButton');
const socialButton = document.getElementById('socialButton');
const personalButton = document.getElementById('personalButton');
const bufferButton = document.getElementById('bufferButton');

// Declaring Variables
var now = new moment();
var s = now.format("ss");
var h = now.format("HH");
var m = now.format("mm");

var workTime = document.getElementById("workTime");
var sleepTime = document.getElementById("sleepTime");
var generalTime = document.getElementById("generalTime");
var readingTime = document.getElementById("readingTime");
var socialTime = document.getElementById("socialTime");
var personalTime = document.getElementById("personalTime");
var bufferTime = document.getElementById("bufferTime");


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
    return [minGone, minLeft, s, m, h];
}

setInterval(minCounter, 500);


// Schedule

function time() {
    var now = new moment();
    var s = now.format("ss");
    if (s == 0)
        return 1;
     else 
        return 0;
}

setInterval(time, 500);


// Time Penalty

function timePenalty() {
    oldGypsyMan = minCounter();
    penaltyTime = oldGypsyMan[0]
    if ( penaltyTime < 420)
        penaltyTime= 420 - penaltyTime;
    else
        penaltyTime = penaltyTime;
    leftTime = oldGypsyMan[1];
    console.log(penaltyTime);
    console.log(leftTime);
    switch (true) {

        case penaltyTime > 354: {
            workTime.innerHTML = 1440 - penaltyTime;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 0;
            generalTime.innerHTML = 0;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 294: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 354 - penaltyTime;
            generalTime.innerHTML = 0;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 174: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 294 - penaltyTime;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 114: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 60;
            personalTime.innerHTML = 174 - penaltyTime;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 60: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 60;
            personalTime.innerHTML = 60
            socialTime.innerHTML = 114 - penaltyTime;
            bufferTime.innerHTML = 0;
            break;
        }
        case penaltyTime <= 60: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 120;
            personalTime.innerHTML = 60;
            socialTime.innerHTML = 54;
            bufferTime.innerHTML = 60 - penaltyTime;
            break;
        }
    }

}

// Time Set

function timeReset() {
    if (Number(h + m + s) == 0) {
        workTime.innerHTML = 666;
        sleepTime.innerHTML = 420;
        generalTime.innerHTML = 120;
        readingTime.innerHTML = 60;
        socialTime.innerHTML = 54;
        personalTime.innerHTML = 60;
        bufferTime.innerHTML = 60;
    }
}
//setInterval(timeReset, 1000)

// Toggle Functions

function Work() {
    if (workTime.innerHTML == 0) {
        alert('No Work Time Left');
    } else {
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
}

function Sleep() {
    if (sleepTime.innerHTML == 0) {
        alert('No Sleep Time Left');
    } else {
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
}

function Reading() {
    if (readingTime.innerHTML == 0) {
        alert('No Reading Time Left');
    } else {
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
}

function General() {
    if (generalTime.innerHTML == 0) {
        alert('No General Time Left');
    } else {
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
}



function Personal() {
    if (personalTime.innerHTML == 0) {
        alert('No Personal Time Left');
    } else {
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
}


function Social() {
    if (socialTime.innerHTML == 0) {
        alert('No Social Time Left');
    } else {
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
}


function Buffer() {
    if (bufferTime.innerHTML == 0) {
        alert('No Buffer Time Left');
    } else {
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
}



// Wrok Counter

function workCounter() {
    var status = workButton.innerText;
    if (status == 'Work Time') {
        var workTime = document.getElementById("workTime").innerHTML;
        workTime = workTime - time();
        document.getElementById("workTime").innerHTML = workTime;

    } else {
        var work = document.getElementById("workTime").innerHTML;
        document.getElementById("workTime").innerHTML = work;
    }
}
setInterval(workCounter, 1000);


// Sleep Counter

function sleepCounter() {
    var status = sleepButton.innerText;
    if (status == 'Sleep Time') {
        var sleepTime = document.getElementById("sleepTime").innerHTML;
        sleepTime = sleepTime - time();
        document.getElementById("sleepTime").innerHTML = sleepTime;

    } else {
        var sleep = document.getElementById("sleepTime").innerHTML;
        document.getElementById("sleepTime").innerHTML = sleep;
    }
}
setInterval(sleepCounter, 1000);


// General Counter

function generalCounter() {
    var status = generalButton.innerText;
    if (status == 'General Time') {
        var generalTime = document.getElementById("generalTime").innerHTML;
        generalTime = generalTime - time();
        document.getElementById("generalTime").innerHTML = generalTime;

    } else {
        var general = document.getElementById("generalTime").innerHTML;
        document.getElementById("generalTime").innerHTML = general;
    }
}
setInterval(generalCounter, 1000);


// Reading Counter

function readingCounter() {
    var status = readingButton.innerText;
    if (status == 'Reading Time') {
        var readingTime = document.getElementById("readingTime").innerHTML;
        readingTime = readingTime - time();
        document.getElementById("readingTime").innerHTML = readingTime;

    } else {
        var reading = document.getElementById("readingTime").innerHTML;
        document.getElementById("readingTime").innerHTML = reading;
    }
}
setInterval(readingCounter, 1000);


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
setInterval(socialCounter, 1000);


// Personal Counter

function personalCounter() {
    var status = personalButton.innerText;
    if (status == 'Personal Time') {
        var personalTime = document.getElementById("personalTime").innerHTML;
        personalTime = personalTime - time();
        document.getElementById("personalTime").innerHTML = personalTime;

    } else {
        var personal = document.getElementById("personalTime").innerHTML;
        document.getElementById("personalTime").innerHTML = personal;
    }
}
setInterval(personalCounter, 1000);


// Buffer Counter

function bufferCounter() {
    var status = bufferButton.innerText;
    if (status == 'Buffer Time') {
        var bufferTime = document.getElementById("bufferTime").innerHTML;
        bufferTime = bufferTime - time();
        document.getElementById("bufferTime").innerHTML = bufferTime;

    } else {
        var buffer = document.getElementById("bufferTime").innerHTML;
        document.getElementById("bufferTime").innerHTML = buffer;
    }
}
setInterval(bufferCounter, 1000);
