let input = document.getElementById("inputForString");
document.onmouseover = function (){
    input.value="Курсор в межах документу";
}
document.onmouseout = function (){
    input.value="Курсор поза межами документу";
}
document.onmousedown = function (){
    input.value="Натиснута довільна клавіша миші";
}