let stopwatchInterval;
let lapCounter = 1;
let lapTimes = [];

function startStopwatch() {
    let startTime = Date.now();
    stopwatchInterval = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        updateStopwatch(elapsedTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}
function restartStopWatch(){
    
    clearInterval(stopwatchInterval); 
    lapCounter = 1; 
    lapTimes = []; 
    updateStopwatch(0); 
    //document.getElementById('lapList').innerHTML = ''; 

}
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    lapCounter = 1;
    lapTimes = [];
    updateStopwatch(0);
    //document.getElementById('lapList').innerHTML = '';
}

function lap() {
    let currentTime = document.querySelector('.stopwatch').textContent;
    lapTimes.push(currentTime);
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${currentTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCounter++;
}

function updateStopwatch(time) {
    let formattedTime = new Date(time).toISOString().substr(11, 8);
    document.querySelector('.stopwatch').textContent = formattedTime;
}