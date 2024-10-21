var currMonth = new Date().getMonth() +1;
var currDay = new Date().getDate();
var date = currMonth.toString() + currDay.toString();
if (date > 320 && date < 621) {
    document.getElementById("style").setAttribute("href", "res/spring.css");
} else if (date > 620 && date < 921) {
    document.getElementById("style").setAttribute("href", "res/summer.css");
} else if (date > 920 && date < 1221) {
    document.getElementById("style").setAttribute("href", "res/fall.css");
} else if (date > 1220 && date < 321) {
    document.getElementById("style").setAttribute("href", "res/winter.css");
} else {
    document.getElementById("style").setAttribute("href", "res/style.css");
} 