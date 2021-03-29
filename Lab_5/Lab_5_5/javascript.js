document.getElementById("buttonForInput").onclick = function () {
    let returnedValue = document.getElementById("inputForArray").value;
    let array = returnedValue.split(", ");
    let n = document.getElementById("nValue").value;
    getLast(array, n);
}

function getLast(array, n) {
    let numberOfElementsToReturn = n;
    if (numberOfElementsToReturn >= array.length) {
        numberOfElementsToReturn = array.length;
    }
    document.getElementById("result").innerHTML = "Результат роботи фнукції getLast: ";
    for (let i = array.length - numberOfElementsToReturn; i < array.length; i++) {
        document.getElementById("result").innerHTML += array[i] + " "
    }
}
