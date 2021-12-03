//Globaali päivämäärä
var currentDate = new Date();
var day = currentDate.getDate();


//Päivän luukun korostaminen
function korostaLuukku() {
    var day = currentDate.getDate();
    console.log(day);
    var id = "luukku" + day;
    document.getElementById(id).className = "korostus";
    console.log(id);
}
//laskee päivät nykypäivään asti ja muuttaa niiden kursorit
for(var i = 1; i <= day; i++) {
    pointer("luukku"+i)
}
//Pointer jo klikkaus mahdollinen, laita luukun alkuun. Koko kutsu vaikka luukku yks olis: pointer("luukku1");
function pointer(luukkunro) { //tää pitää laittaa manuaalisesti, en tiedä miten sais automaattisesti, esim. "luukku1"
    var luukkunumero = document.getElementById(luukkunro).id;
    console.log(luukkunumero)
    var luukkuDay = 0;
    if (luukkunumero.length == 7) {                                   //onko yksinumeroinen
        luukkuDay = luukkunumero.substring(luukkunumero.length - 1) // nappaa vikan luvun
        
    }
    else {
        luukkuDay = luukkunumero.substring(6, 8);                 //nappaa kaks vikaa
    }
    luukkuDay = parseInt(luukkuDay);
    if (luukkuDay <= day) {
        document.getElementById(luukkunro).style.cursor = "pointer";
    }
}
