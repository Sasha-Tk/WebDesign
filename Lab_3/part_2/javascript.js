window.onload = function () {
    const result = prompt("Введіть рідне місто, ваше ім'я та вік?");

    const valuesToPrint = result.split(' ');

    alert("Мене звати " + valuesToPrint[1] + ".\nМені " + valuesToPrint[2] + " років." +
        "\nФайне місто " + valuesToPrint[0] + " - це моє рідне місто!");
}