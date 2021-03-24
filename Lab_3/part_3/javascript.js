window.onload = function () {
    const url = prompt("Введіть адресу веб сторінки");
    const isNeedForTransition = confirm("Перейти на вказану веб сторінку?");
    if (isNeedForTransition) {
        window.open(url, "newWindow", "height=400,width=600,location=yes,toolbar=no,scrollbars=no");
    } else {
        window.location.reload();
    }
}