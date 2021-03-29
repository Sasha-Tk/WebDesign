document.getElementById("buttonForInput").onclick = function () {
    let returnedValue = document.getElementById("inputForArray").value;
    let array = returnedValue.split(", ");
    let n = document.getElementById("nValue").value;
    getFirst(array, n);
}

function getFirst(array, n) {
    let numberOfElementsToReturn = n;
    if (n < 0) {
        numberOfElementsToReturn = array.length + parseInt(n);
    }
    document.getElementById("result").innerHTML = "Результат роботи фнукції getFirst: ";
    for (let i = 0; i < numberOfElementsToReturn; i++) {
        document.getElementById("result").innerHTML += array[i] + " "
    }
}

