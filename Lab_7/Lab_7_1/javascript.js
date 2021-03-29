document.getElementById("button1ForInput").onclick = function () {
    let arrayOfWords = document.getElementById("inputForString").value.split(" ");
    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);

    }
    document.getElementById("inputForString").value = arrayOfWords.join(" ");
}

let click = "first";

document.getElementById("button2ForInput").onclick = function () {
    let arrayOfLetters = document.getElementById("inputForString").value.split("");
    let lastCase;
    if (click === "first") {
        lastCase = "lower";
    } else {
        lastCase = "upper";
    }
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (isLetter(arrayOfLetters[i])) {
            if (lastCase === "lower") {
                arrayOfLetters[i] = arrayOfLetters[i].toUpperCase();
                lastCase = "upper";
            } else {
                arrayOfLetters[i] = arrayOfLetters[i].toLowerCase();
                lastCase = "lower";
            }
        }
    }
    document.getElementById("inputForString").value = arrayOfLetters.join("");
    if (click === "first") {
        click = "second";
    } else {
        click = "first";
    }
}

function isLetter(smb) {
    return smb.toUpperCase() !== smb.toLowerCase();
}