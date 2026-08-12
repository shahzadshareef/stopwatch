let display = document.getElementById("display");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function stopwatch(){

    milliseconds += 10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds.toString().padStart(3,'0');

    display.innerHTML = `${h}:${m}:${s}:${ms}`;
}

startBtn.onclick = function(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,10);
}

pauseBtn.onclick = function(){
    clearInterval(timer);
}

resetBtn.onclick = function(){

    clearInterval(timer);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerHTML = "00:00:00:000";
}