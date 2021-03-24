let isMoving = false;

function moveTitle() {
    let currentTitle;
    currentTitle = document.title;
    currentTitle = currentTitle[currentTitle.length - 1] + currentTitle;
    document.title = currentTitle.substring(0, currentTitle.length - 1);
}

let interval;

document.getElementById("button").onclick = function () {

    if(isMoving===false){
        interval = setInterval(moveTitle, 100);
        isMoving = true;
    }
    else{
        clearInterval(interval);
        isMoving = false;
    }
}
