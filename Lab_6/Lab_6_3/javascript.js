document.getElementById("buttonForInput").onclick = function () {
    let inputValue = document.getElementById("inputForString").value;
    let reg = new RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}.[0-9]{1,3}$/, 'g');
    let answer = reg.test(inputValue);
    document.getElementById("result").innerHTML="Результат: " + answer;
}