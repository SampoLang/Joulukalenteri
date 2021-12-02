//Päivän luukun korostaminen
var currentDate = new Date();
var day = currentDate.getDate();
console.log(day);
var id = "luukku" + day;
document.getElementById(id).className = "korostus";
console.log(id);
