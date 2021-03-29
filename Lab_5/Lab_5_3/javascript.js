document.getElementById("buttonForInput").onclick = function () {

    let inputArray = document.getElementsByTagName("input");
    let currentArray = [];
    let finalArray = [];
    for (let i = 0; i < 12; i += 2) {
        currentArray = inputArray[i].value.split(", ");
        if (inputIsCorrect(currentArray, i/2)) {
            if (inputArray[i + 1].checked) {
                for (let i = 0; i < currentArray.length; i++) {
                    currentArray[i] = parseFloat(currentArray[i]) / 2.0;
                }
            }
            finalArray.push(currentArray);
        }
    }
    document.getElementById("result").innerHTML = "Результат: " + finalArray;
}

function inputIsCorrect(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (Number.isNaN(parseFloat(array[i]))) {
            alert("У " + (n+1) + "-му рядку допущена помилка введення!")
            return false;
        }
    }
    return true;
}