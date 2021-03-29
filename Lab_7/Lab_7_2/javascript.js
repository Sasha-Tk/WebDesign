document.getElementById("buttonForTime").onclick = function () {
    let days = ["понеділок", "вівторок", "середа", "четвер", "п`ятниця", "субота", "неділя"]
    let currentDay = new Date().getDay() - 1;
    document.getElementById("info").innerHTML = "Сьогодні " + days[currentDay];
}
