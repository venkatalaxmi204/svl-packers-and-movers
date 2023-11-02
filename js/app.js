//DOCUMENT OBJECT MODEL --DOM
function init() {
    const hamburger = document.querySelector(".hamburger");
    const sidebarclosebutton = document.querySelector(".close-button");
    const sidebarcontainer = document.querySelector(".sidebar-container");
    
    
    const opensidebar = () => {
        sidebarcontainer.classList.add("show-sidebar");
    };
    
    const closesidebar = () => {
        sidebarcontainer.classList.remove("show-sidebar");
    }
    
    hamburger.addEventListener("click", opensidebar);
    sidebarclosebutton.addEventListener("click", closesidebar);
    }
    init();
    
    function navrelatedcode(){
        const navbarcontainer = document.querySelector
    (".nav-container");
    window.addEventListener("scroll", function(){
        const scrollnumber = window.scrollY;
        const targetnumber = window.innerWidth >=992 ? 70 : 50;
        if (scrollnumber >= targetnumber) {
            navbarcontainer.classList.add("sticky-nav");
        } else {
            navbarcontainer.classList.remove("sticky-nav");
        }
    });
    }
    navrelatedcode();

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
