let body = document.querySelector("body")
let preloader = document.querySelector(".preloader")
let bgs = document.querySelectorAll(".bg")

let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let menu = document.querySelector(".menu")

let nextSlider = document.querySelector(".next-slide")
let prevSlider = document.querySelector(".prev-slide")

let index = 0


let interval = setInterval(slider, 6000);


openMenu.addEventListener("click", () => {
    menu.classList.toggle("opened")
})
closeMenu.addEventListener("click", () => {
    menu.classList.remove("opened")
})

nextSlider.addEventListener("click", () => {
    clearInterval(interval)
    slider()
    interval = setInterval(slider, 6000);
})
prevSlider.addEventListener("click", () => {
    clearInterval(interval) 
    previousSlider()
    interval = setInterval(slider, 6000);
})

function previousSlider() {
    bgs[index].classList.remove("active")
    bgs[index].firstElementChild.classList.remove("s")
    index == 0 ? index = 2 : index -= 1
    bgs[index].classList.add("active")
    bgs[index].firstElementChild.classList.add("s")
}


window.onload = () => {
    body.classList.add("loaded")
    preloader.classList.add("disappear")
}

function slider() {
    bgs[index].classList.remove("active")
    bgs[index].firstElementChild.classList.remove("s")
    index = (index + 1) % 3
    bgs[index].classList.add("active")
    bgs[index].firstElementChild.classList.add("s")
}

function showSliderImage(index) {
    
    bgs[index].classList.add("active")
    bgs[index].firstElementChild.classList.add("s")
}