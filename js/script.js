var elOpenBtn = document.querySelector(".js-open-btn")
var elModal = document.querySelector(".modal")
var elCloseBtn = document.querySelector(".js-close-btn")

elOpenBtn.addEventListener("click", function(){
    elModal.classList.add("modal-open")
})

elCloseBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open")
})

elModal.addEventListener("click", function(){
    elModal.classList.remove("modal-open")
})