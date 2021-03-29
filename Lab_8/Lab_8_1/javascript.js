let input = document.getElementById("inputForString");
input.onclick = function (event) {
    if (event.ctrlKey) {
        input.value = "1";
    } else if (event.altKey) {
        input.value = "2";
    } else if (event.shiftKey) {
        input.value = "3";
    } else {
        input.value = "Не було натиснуто додаткових клавіш";
    }
}