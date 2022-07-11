// Change Navbar background opacity with scrolling

let navbar = document.getElementById("nav-container")

window.addEventListener('scroll',(event) => {
   if (window.scrollY > 0) {
    navbar.classList.add("solid-nav") 
   } else {
    navbar.classList.remove("solid-nav")
   }
});

// Initialize Carousel

document.addEventListener('DOMContentLoaded', function(){
    let carousel = document.querySelectorAll('.carousel')
    M.Carousel.init(carousel,{
        dist:5,
        shift: 5
    })
})