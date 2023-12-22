var elModal = document.querySelector(".modal")
var elShadow = document.querySelector(".shadow")
function openModal(){
    elModal.classList.add("modal__open")
    elShadow.style.display = "block"
}
function closeModal(){
    elModal.classList.remove("modal__open")
    elShadow.style.display = "none"
}