// Time Penalty

function timePenalty() {
    oldGypsyMan = minCounter();
    penaltyTime = oldGypsyMan[0] - 420;
    leftTime = oldGypsyMan[1];
    console.log(penaltyTime);
    console.log(leftTime);
    switch (true) {

        case penaltyTime > 774: {
            workTime.innerHTML - time();
            sleepTime.innerHTML = 0;
            readingTime.innerHTML = 0;
            generalTime.innerHTML = 0;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 354: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 774 - time();
            readingTime.innerHTML = 0;
            generalTime.innerHTML = 0;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 294: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 420;
            readingTime.innerHTML = 354 - time();
            generalTime.innerHTML = 0;
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 174: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 420;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 294 - time();
            personalTime.innerHTML = 0;
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 114: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 420;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 60;
            personalTime.innerHTML = 174 - time();
            socialTime.innerHTML = 0;
            bufferTime.innerHTML = 0;
            break;
        }

        case penaltyTime > 60: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 420;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 60;
            personalTime.innerHTML = 60
            socialTime.innerHTML = 114 - time();
            bufferTime.innerHTML = 0;
            break;
        }
        case penaltyTime <= 60: {
            workTime.innerHTML = 666;
            sleepTime.innerHTML = 420;
            readingTime.innerHTML = 60;
            generalTime.innerHTML = 120;
            personalTime.innerHTML = 60;
            socialTime.innerHTML = 54;
            bufferTime.innerHTML = 60 - time();
            break;
        }
    }

}

timePenalty();
