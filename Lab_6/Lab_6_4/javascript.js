document.getElementById("buttonForInput").onclick = function () {
    let inputValue = document.getElementById("inputForString").value;
    let reg = new RegExp(/^[a-zA-Z][a-zA-Z_.]*@[a-zA-Z]\w*\.[a-zA-Z]+$/, 'g');
    let answer = reg.test(inputValue);
    document.getElementById("result").innerHTML = "Результат: " + answer;
    if (answer) {
        document.getElementById("inputForString").style.backgroundColor = "green";
        alert("Введено правильну адресу!");
    } else {
        document.getElementById("inputForString").style.backgroundColor = "red";
        alert("Введена адреса містить помилки!");
    }

}