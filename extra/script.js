"use strict";
document.querySelectorAll(".nav-link")[0].classList.add('active');
function navbarSelected(linkClicked) {
    const navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < Object.keys(navLinks).length; i++) {
        navLinks[i].classList.remove('active');
    }
    navLinks[linkClicked].classList.add('active');
}
