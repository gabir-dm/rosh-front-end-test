// Change Navbar background opacity with scrolling

let navbar = document.getElementById("nav-container")

window.addEventListener('scroll',(event) => {
   if (window.scrollY > 0) {
    navbar.classList.add("solid-nav") 
   } else {
    navbar.classList.remove("solid-nav")
   }
});
