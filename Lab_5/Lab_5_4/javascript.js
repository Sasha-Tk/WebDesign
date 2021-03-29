document.getElementById("buttonForInput").onclick = function () {
    let array = document.getElementById("inputForArray").value.split(", ");

    for (let i = array.length - 1, j; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    document.getElementById("result").innerHTML = "Результат сортування випадковим чином: " + array;
}