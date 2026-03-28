let menuBtn = document.querySelector(".hamburgerMenu");
let showMenu = document.querySelector("#showMenu");
let navBar = document.querySelector("nav");
let arrowUp = document.querySelector(".fa-up");
let clicked = false;

// add events to the elements
menuBtn.addEventListener("click", showNavBar);
document.addEventListener("scroll", scrollPage);

// functions
function showNavBar() {
  if (clicked == false) {
    showMenu.style.display = "inline-block";
    showMenu.style.animation = "show .3s ease 0s 1 normal both";
    navBar.style.display = "inline-block";
    navBar.style.animation = "show .3s ease 0s 1 normal both";

    clicked = true;
  } else if (clicked == true) {
    showMenu.style.animation = "hide .3s ease 0s 1 normal both";
    navBar.style.animation = "hide .3s ease 0s 1 normal both";
    setTimeout(() => {
      showMenu.style.display = "none";
      navBar.style.display = "none";
    }, 300);

    clicked = false;
  }
}

function scrollPage() {
  if (window.scrollY == 0) {
    arrowUp.style.opacity = 0;
    arrowUp.style.cursor = "initial";
  } else {
    arrowUp.style.opacity = 1;
    arrowUp.style.cursor = "pointer";
    arrowUp.onclick = () => {
      window.scrollTo(0, 0);
    };
  }
}