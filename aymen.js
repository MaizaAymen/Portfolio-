const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".home-content h1", {
    ...scrollRevealOption,
    origin: "center",
    delay:700
  });
  ScrollReveal().reveal(".header__content h3", {
...scrollRevealOption,
delay: 900,

});
ScrollReveal().reveal(".text-animte h3", {
...scrollRevealOption,
delay: 900,

});
ScrollReveal().reveal(".home-sci", {
...scrollRevealOption,
delay: 1500,

});


ScrollReveal().reveal(".home p", {
...scrollRevealOption,
delay: 1500,
});
ScrollReveal().reveal(".btn-box", {
...scrollRevealOption,
delay: 1200,


});
const headeer=document.querySelector("header");
  window.addEventListener("scroll",function(){
     headeer.classList.toggle("sticky",this.window.scrollY >120);
  });
  document.getElementById("viewCVButton").addEventListener("click", function() {
    window.open('cv_bb.pdf', '_blank'); // Opens CV in a new tab
});