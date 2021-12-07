//Globaali päivämäärä
var currentDate = new Date();
var day = currentDate.getDate();


//Päivän luukun korostaminen
function korostaLuukku() {
    var day = currentDate.getDate();
    var id = "luukku" + day;
    document.getElementById(id).className = "korostus";
    //laskee päivät nykypäivään asti ja muuttaa niiden kursorit
    for (var i = 1; i <= day; i++) {
        pointer("luukku" + i)
    }
}

//Pointer jo klikkaus mahdollinen, laita luukun alkuun. Koko kutsu vaikka luukku yks olis: pointer("luukku1");
// zoomaa myös luukkua jos sitä voi klikata
function pointer(luukkunro) {
    var luukkunumero = document.getElementById(luukkunro).id;
    var luukkuDay = 0;
    if (luukkunumero.length == 7) { //onko yksinumeroinen
        luukkuDay = luukkunumero.substring(luukkunumero.length - 1) // nappaa vikan luvun

    } else {
        luukkuDay = luukkunumero.substring(6, 8); //nappaa kaks vikaa
    }
    luukkuDay = parseInt(luukkuDay);
    if (luukkuDay <= day) {
        document.getElementById(luukkunro).style.cursor = "pointer";
        //lisää mouseoverin ja zoomin luukkuihin jota voi avata
        document.getElementById(luukkunro).addEventListener("mouseover", function () {
            document.getElementById(luukkunro).style.transform = "scale(1.2)";
            document.getElementById(luukkunro).style.backgroundColor = "white"; //täys valkoinen kun "mouseover"
        });
        //palauttaa zoomin normaaliksi
        document.getElementById(luukkunro).addEventListener("mouseout", function () {
            document.getElementById(luukkunro).style.transform = "scale(1.0)";
            document.getElementById(luukkunro).style.backgroundColor = "rgb(255, 255, 255, 0.85)" //takasin läpinäkyvään kun "mouseout"
        });
    }
}
//modaallit
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return

    //nappaa modal-id:n järjestysluvun
    //var luukku = new Date(2021, 11, modal.id.substr(5));
    var luukku = new Date(2021, 11, 1);

    if (currentDate>luukku) {
        modal.classList.add('active')
        overlay.classList.add('active')
    } else {
        alert("Hiljaa hyvä tulee!");
    }

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

}

//-----------------Luukku1-----------------------------------//
function luukku1() {
    var joulukuusi = "";
    var lkm = document.getElementById("luukku1KuusenKoko").value;
    var aukot = '<img src ="../media/emptyspace.png" alt="jouluhavu">';
    lkm = parseInt(lkm);
    if (lkm > 10 || lkm <= 4) {
        document.getElementById("varoitus").innerHTML = "SYÖTÄ HAVURIVIT VÄLILTÄ 4-10"
    }
    else {
        for (i = 1; i <= lkm; i++) {
            joulukuusi += aukot;
            for (j = i; j < lkm; j++) {
                joulukuusi += aukot;
            }
            for (k = 0; k < (i * 2) - 1; k++) {
                joulukuusi += '<img src ="../media/threebranch.png" alt="jouluhavu">';
            }
            joulukuusi += "<br>";
        }
        document.getElementById("modal1").style.backgroundImage = 'url("../media/luukku1background_after.jpg")';
    }
    document.getElementById("modal1Content").innerHTML += joulukuusi;
    document.getElementById("KuusenKokoNappi").removeEventListener("click", luukku1);
    document.getElementById("KuusenKokoNappi").value = "Pukki kiittää";
}
//--------------------------------------------------------------//
//---------------------------Luukku2-----------------------------//
function luukku2() {
    var laulu = document.getElementById("joululaulu");
    var luukku = document.getElementById("luukku2");
    var duration = laulu.duration;
    document.getElementById("luukku2").style.backgroundImage = 'url("../media/vesku.jpg")';
    document.getElementById("luukku2").animate([
        { transform: "scale(1, 1)" },
        { transform: "scale(10.00, 10.00)" },
        {transform:"rotate(180deg)"},
        { transform: "scale(1, 1)" },
    ], {
        duration: 13374, iterations: 1
    });

    console.log(duration);
    laulu.play();
    setTimeout(function () {
        luukku.style.backgroundImage = "none";
        luukku.style.zIndex = "10";

    }, 13374);
}
//-------------------------------Luukku4------------------------------//
var lkm =0;
function reveal(id) {
        if (lkm == 4) {
            document.getElementById("luukku4H1").innerHTML = "Onneksi olkoon! Löysit kaikki tähdet pukille."
        }
        document.getElementById(id).style.opacity = "1"
        lkm++;
}

//-----------------------------------------------------------------------//
//---------------------------LUUkku 6--------------------------------------------//
function avaaLuukku6(){
    document.getElementById("torilla").style.display = "inline"
    window.scrollTo(0,0)
    setTimeout(function(){
        document.getElementById("torilla").style.display = "none";
        }, 500);
   
}



//---------------------------LUUkku 11-------------------------------------------//
function aikaAlert(){
    var now = new Date().getTime();
    var aatto = new Date('December 24, 2021 00:00:00').getTime();
    var msAattoon = aatto - now;
    var sAattoon = msAattoon / 1000;
    var minAattoon = sAattoon / 60;
    var hAattoon = minAattoon / 60;
    var dAattoon = hAattoon / 24;

    var dleft = Math.floor(dAattoon);
    var hleft = hAattoon - dleft * 24
    var minleft =  (hleft - Math.floor(hleft)) * 60;
    var secleft = (minleft - Math.floor(minleft)) * 60;
    document.getElementById("luukku-11-tuloste").innerHTML = "Jouluaattoon on tästä hetkestä " +Math.floor(dleft) + " päivää, " + Math.floor(hleft) +  " tuntia, " + Math.floor(minleft) +" minuuttia ja " + Math.floor(secleft) + " sekuntia.<br><br>";
}