let menuTlacitko = document.querySelector("#menu-tlacitko")
let menuPolozky = document.querySelector("#menu-polozky")
let menuIcon = menuTlacitko.querySelector("i")

const rozbalMenu = () => {
    menuPolozky.classList.toggle("show")
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
 }

menuTlacitko.addEventListener("click", rozbalMenu)

