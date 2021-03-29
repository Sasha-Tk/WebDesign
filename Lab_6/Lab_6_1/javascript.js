document.getElementById("buttonForInput").onclick = function () {
    let inputValue = document.getElementById("inputForString").value;
    let reg = new RegExp(/a\\\\\\a/, 'g');
    inputValue = inputValue.replace(reg, "!");
    document.getElementById("result").innerHTML = "Результат: " + inputValue;
}
