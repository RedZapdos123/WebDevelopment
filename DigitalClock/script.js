//The global variable to control the time display format.
let is24Hour = true;

//The function display the time by updating the digital clock.
function updateClock(){
    //Creating the date object.
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Converting to 12 hours format if the format state has been toggled.
    if(!is24Hour){
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        document.getElementById("clock").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${period}`;
    } 
    else{
        document.getElementById("clock").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }
}

//The function to display the time correctly, by adding additional zeros if necessary.
function formatTime(time){
    return time < 10 ? "0" + time : time;
}

//The function to change the format to 12 hours format from 24 hours one.
function changeFormat(){
    is24Hour = !is24Hour;
    updateClock();
}

//Update the clock every second.
setInterval(updateClock, 1000);
updateClock();
