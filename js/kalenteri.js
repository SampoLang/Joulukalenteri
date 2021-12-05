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
    modal.classList.add('active')
    overlay.classList.add('active')

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
    if (lkm > 6 || lkm <= 0) {
        document.getElementById("varoitus").innerHTML = "SYÖTÄ KUUSI VÄLILTÄ 1-6"
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
