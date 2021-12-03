//Globaali päivämäärä
var currentDate = new Date();
var day = currentDate.getDate();


//Päivän luukun korostaminen
function korostaLuukku() {
    var day = currentDate.getDate();
    var id = "luukku" + day;
    document.getElementById(id).className = "korostus";
}
//laskee päivät nykypäivään asti ja muuttaa niiden kursorit
for (var i = 1; i <= day; i++) {
    pointer("luukku" + i)
}
//Pointer jo klikkaus mahdollinen, laita luukun alkuun. Koko kutsu vaikka luukku yks olis: pointer("luukku1");
// zoomaa myös luukkua jos sitä voi klikata
function pointer(luukkunro) {
    var luukkunumero = document.getElementById(luukkunro).id;
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
        //lisää mouseoverin ja zoomin luukkuihin jota voi avata
        document.getElementById(luukkunro).addEventListener("mouseover", function () {
            document.getElementById(luukkunro).style.transform = "scale(1.3)";
        });
        //palauttaa zoomin normaaliksi
        document.getElementById(luukkunro).addEventListener("mouseout", function () {
            document.getElementById(luukkunro).style.transform = "scale(1.0)";
        });
    }
}

