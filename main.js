let darkMode = false;
document.getElementById("change-theme-button").addEventListener("click", changeTheme);

if (localStorage.getItem("theme") === "false" || localStorage.getItem("theme") === "true")
    darkMode = localStorage.getItem("theme") === "true";

if(darkMode === true) {
    goBlack();
}

else if(darkMode === false) {
    goWhite();
}












function changeTheme() {
    if (localStorage.getItem("theme") === false || localStorage.getItem("theme") === true)
        darkMode = localStorage.getItem("theme") === "true";
    if(darkMode === false) {
        darkMode = true;
        goBlack();
    }

    else if(darkMode === true) {
        darkMode = false;
        goWhite();
    }

    localStorage.setItem("theme", darkMode);
}

function goBlack() {
    document.getElementsByTagName("body")[0].style.backgroundColor="black";

    document.getElementById("change-theme-button").style.fill="white";
    document.getElementsByClassName("main")[0].classList.replace("main", "main-dark");
    document.getElementsByTagName("nav")[0].classList.replace("is-white", "is-black");

    document.getElementsByClassName("advantages")[0].classList.replace("advantages", "advantages-black");
    let advantagesCardImg = document.getElementsByClassName("advantages-card-img");
    for (let i = 0; i < advantagesCardImg.length;) {
        advantagesCardImg[i].classList.replace("advantages-card-img", "advantages-card-img-black");
    }
    let advantagesBox = document.getElementsByClassName("advantages-box");
    for (let i = 0; i < advantagesBox.length;) {
        advantagesBox[i].classList.replace("advantages-box", "advantages-box-black");
    }
    document.getElementsByClassName("servers")[0].classList.replace("servers", "servers-black");
    let serverCard = document.getElementsByClassName("server-card");
    for(let i = 0; i < serverCard.length;) {
        serverCard[i].classList.replace("server-card", "server-card-black");
    }

    document.getElementsByClassName("team")[0].classList.replace("team", "team-black");
    let teamArrow = document.getElementsByClassName("team-arrow");
    for(let i = 0; i < teamArrow.length; i++) {
        teamArrow[i].style.fill="white";
    }

    document.getElementsByClassName("footer")[0].classList.replace("footer", "footer-black");
}

function goWhite() {
    document.getElementsByTagName("body")[0].style.backgroundColor="white";

    document.getElementById("change-theme-button").style.fill="black";
    document.getElementsByClassName("main-dark")[0].classList.replace("main-dark", "main");
    document.getElementsByTagName("nav")[0].classList.replace("is-black", "is-white");

    document.getElementsByClassName("advantages-black")[0].classList.replace("advantages-black", "advantages");
    let advantagesCardImg = document.getElementsByClassName("advantages-card-img-black")
    for (let i = 0; i < advantagesCardImg.length;) {
        advantagesCardImg[i].classList.replace("advantages-card-img-black", "advantages-card-img");
    }

    let advantagesBox = document.getElementsByClassName("advantages-box-black");
    for (let i = 0; i < advantagesBox.length;) {
        advantagesBox[i].classList.replace("advantages-box-black", "advantages-box");
    }

    document.getElementsByClassName("servers-black")[0].classList.replace("servers-black", "servers");
    let serverCard = document.getElementsByClassName("server-card-black");
    for(let i = 0; i < serverCard.length;) {
        serverCard[i].classList.replace("server-card-black", "server-card");
    }

    document.getElementsByClassName("team-black")[0].classList.replace("team-black", "team");
    let teamArrow = document.getElementsByClassName("team-arrow");
    for(let i = 0; i < teamArrow.length; i++) {
        teamArrow[i].style.fill="black";
    }

    document.getElementsByClassName("footer-black")[0].classList.replace("footer-black", "footer");
}