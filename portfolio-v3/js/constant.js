/* JS Document for All Custom Pages */

document.getElementById("year").innerHTML = new Date().getFullYear();

let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("disabled")) {
        btns[i].classList.add("btn-outline-light");
        btns[i].classList.remove("btn-light");
    }
}

/* toggle dark mode */
function darkToggle() {
    let dt = document.getElementById("dark-toggle");
    if (dt.checked) {
        document.body.classList.add("dark");
        document.getElementById("navi").classList.add("navbar-dark", "bg-dark");
        document.getElementById("navi").classList.remove("navbar-light", "bg-light");

        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("btn-outline-dark");
            if (!btns[i].classList.contains("disabled")) btns[i].classList.add("btn-light");
            else btns[i].classList.add("btn-outline-light");
        }
    } else {
        document.body.classList.remove("dark");
        document.getElementById("navi").classList.remove("navbar-dark", "bg-dark");
        document.getElementById("navi").classList.add("navbar-light", "bg-light");

        let btns = document.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.add("btn-outline-dark");
            if (!btns[i].classList.contains("disabled")) btns[i].classList.remove("btn-light");
            else btns[i].classList.remove("btn-outline-light");
        }
    }
}