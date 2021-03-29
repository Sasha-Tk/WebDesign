document.getElementById("buttonForInput").onclick = function () {
    let inputValue = document.getElementById("inputForString").value;
    let reg = new RegExp(/\ba\Db\b/, 'g');
    let results = inputValue.match(reg);
    document.getElementById("result").innerHTML="Результат:<br>";
    for(let el of results){
        document.getElementById("result").innerHTML+=el+"<br>"
    }
}