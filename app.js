document.getElementById("date").innerHTML = new Date().toLocaleString();
var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("startPause").innerHTML = "Pause";
    }else {
        running = 0;
        document.getElementById("startPause").innerHTML = "Resume";
    }
};

function reset() {
    running = 0;
    time = 0;
    document.getElementById("output").innerHTML = "00:00:00";
    document.getElementById("startPause").innerHTML = "Start";
};

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time / 10 / 60);
            if(mins <= 9) {
                min = "0" + mins;
            }
            var secs = Math.floor(time / 10);
            if(secs <= 9) {
                secs = "0" + secs;
            }
            var tenth = Math.floor(time % 10);
            if(tenth <= 9) {
                tenth = "0" + tenth;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenth;
            increment();
        }, 100);
    }
};