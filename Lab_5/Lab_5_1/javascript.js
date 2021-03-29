document.getElementById("buttonForInput").onclick = function reverseArray() {
    let returnedValue = document.getElementById("inputForArray").value;
    let notReversedArray = returnedValue.split(", ");
    let reversedArray = notReversedArray.reverse();
    document.getElementById("reversedArray").innerHTML += reversedArray;
    countNumbers(reversedArray);
    return reversedArray;
}

function countNumbers(array) {
    let numberOfNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(parseInt(array[i]))) {
            numberOfNumbers++;
        }
    }
    document.getElementById("numberOfNumbers").innerHTML += numberOfNumbers;
}

