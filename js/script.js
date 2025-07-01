


// NAVBAR //
let navbar = document.getElementById("navbar");

function hideMenu() {
    navbar.style.left = "-300%";
}

function showmenu() {
    navbar.style.left = "5%";
}

function wclose() {
  navbar.style.top = " -450px";
}

// Animation on scroll function and init
function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
}
window.addEventListener('load', aosInit);
