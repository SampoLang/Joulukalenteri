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
//funktion avuulla $() korvaa tekstin document.getElementById(x), ettei sitä tarvitse kirjoittaa joka kerta. Käytä esim. näin    $(luukkuX) = whaevä 
}
function $(x) {
    return document.getElementById(x);
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
//----             LUUKKU 7 ----------------------------------------------------------------------------------//
function harlemShake(){
    (function () {
        function c() {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", f);
        e.setAttribute("class", l);
        document.body.appendChild(e)
        }
        function h() {
        var e = document.getElementsByClassName(l);
        for (var t = 0; t < e.length; t++) {
        document.body.removeChild(e[t])
        }
        }
        function p() {
        var e = document.createElement("div");
        e.setAttribute("class", a);
        document.body.appendChild(e);
        setTimeout(function () {
        document.body.removeChild(e)
        }, 100)
        }
        function d(e) {
        return {
        height: e.offsetHeight,
        width: e.offsetWidth
        }
        }
        function v(i) {
        var s = d(i);
        return s.height > e && s.height < n && s.width > t && s.width < r
        }
        function m(e) {
        var t = e;
        var n = 0;
        while ( !! t) {
        n += t.offsetTop;
        t = t.offsetParent
        }
        return n
        }
        function g() {
        var e = document.documentElement;
        if ( !! window.innerWidth) {
        return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
        return e.clientHeight
        }
        return 0
        }
        function y() {
        if (window.pageYOffset) {
        return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        }
        function E(e) {
        var t = m(e);
        return t >= w && t <= b + w
        }
        function S() {
        var e = document.createElement("audio");
        e.setAttribute("class", l);
        e.src = i;
        e.loop = false;
        e.addEventListener("canplay", function () {
        setTimeout(function () {
        x(k)
        }, 500);
        setTimeout(function () {
        N();
        p();
        for (var e = 0; e < O.length; e++) {
        T(O[e])
        }
        }, 15500)
        }, true);
        e.addEventListener("ended", function () {
        N();
        h()
        }, true);
        e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
        document.body.appendChild(e);
        e.play()
        }
        function x(e) {
        e.className += " " + s + " " + o
        }
        function T(e) {
        e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
        }
        function N() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
        e[n].className = e[n].className.replace(t, "")
        }
        }
        var e = 30;
        var t = 30;
        var n = 350;
        var r = 350;
        var i = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
        var s = "mw-harlem_shake_me";
        var o = "im_first";
        var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
        var a = "mw-strobe_light";
        var f = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
        var l = "mw_added_css";
        var b = g();
        var w = y();
        var C = document.getElementsByTagName("*");
        var k = null;
        for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
        if (E(A)) {
        k = A;
        break
        }
        }
        }
        if (A === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
        }
        c();
        S();
        var O = [];
        for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
        O.push(A)
        }
        }
        })()

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

//---------------------------LUUkku 12-------------------------------------------//

function colorValue(){
    var paivanVari = document.getElementById("color").value
   document.body.style.backgroundImage = "none";
   document.body.style.backgroundColor = paivanVari;
}