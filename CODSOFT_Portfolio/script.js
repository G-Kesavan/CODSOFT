document.getElementById('year').textContent = new Date().getFullYear();

const list = document.querySelector(".list")
const closei = document.querySelector("#close-icon")
const menui = document.querySelector("#menu-icon")

function menushow() {
    list.style.display="grid"
    closei.style.display ="block"
    menui.style.display ="none"
}
function menuclose() {
    list.style.display ="none"
    closei.style.display ="none"
    menui.style.display ="block"
}