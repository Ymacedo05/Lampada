let img = document.getElementById("img")
let btn = document.getElementById("btn")


function iniciar() {

    btn.addEventListener("click", funcionar)
    img.addEventListener("click", funcionar)

    img.addEventListener("dblclick", parar)
}

iniciar()




function funcionar() {
    btn.classList.toggle("active")
    img.classList.toggle("active")
}



function parar() {
    btn.removeEventListener("click", funcionar)
    img.removeEventListener("click", funcionar)

    img.className = "quebrado"
    btn.classList.remove("active")

}





