document.getElementById("buttonForInput").onclick = function () {
    let number = parseFloat(document.getElementById("inputForNumber").value);
    let randomValue = Math.floor(Math.random() * (99)) + 1;
    let sqrtOfNumber = Math.sqrt(number + randomValue);
    document.getElementById("result").innerHTML="Квадратний корінь: sqrt("+number+" + "+randomValue+") = "+sqrtOfNumber;
}