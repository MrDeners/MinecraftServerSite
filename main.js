
document.getElementById("change-theme-button").addEventListener("click", changeTheme);

//Theme Control ======================================================================================================

let theme_link = document.getElementById("theme-link");
let darkTheme = "styles/darkTheme.css";
if (localStorage.getItem("theme") != null && localStorage.getItem("theme") !== "light") {
        theme_link.setAttribute("href", darkTheme);
        document.getElementsByClassName("navbar")[0].classList.replace("is-white", "is-black");
}

function changeTheme() {
    let currentTheme = theme_link.getAttribute("href");
    let theme = "";

    let lightTheme = "styles/lightTheme.css";
    let darkTheme = "styles/darkTheme.css";

    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
        theme = "dark";
        document.getElementsByClassName("navbar")[0].classList.replace("is-white", "is-black");
    }
    else if (currentTheme === darkTheme) {
        currentTheme = lightTheme;
        theme = "light";
        document.getElementsByClassName("navbar")[0].classList.replace("is-black", "is-white");
    }

    theme_link.setAttribute("href", currentTheme);
    Save("theme", theme);
}

function Save(key, value) {
    localStorage.setItem(key, value);
}

//SteepCards Sizes ===================================================================================================

let steepCardsWidth = parseInt(document.getElementsByClassName("steep-card")[0].style.width);
let steepCards = document.getElementsByClassName("steep-card");
for (let i = 0; i < steepCards.length; i++) {
    steepCards[i].style.height = steepCardsWidth + "px";
    console.log(steepCardsWidth);
}
