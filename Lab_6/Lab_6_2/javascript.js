document.getElementById("buttonForInput").onclick = function () {
    let inputValue = document.getElementById("inputForString").value;
    let reg = new RegExp(/^(http|https)/, 'g');
    let answer = reg.test(inputValue);
    document.getElementById("result").innerHTML = "Результат: " + answer;
}