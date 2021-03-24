let currentHour;
let currentMinute;
let currentSecond;

setInterval(function () {
    let currentTime = new Date();
    currentHour = currentTime.getHours();
    currentMinute = currentTime.getMinutes();
    currentSecond = currentTime.getSeconds();
    document.getElementById("pForTime").innerText = currentHour+":"+currentMinute+":"+currentSecond;
}, 1000)

