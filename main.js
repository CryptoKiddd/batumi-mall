const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('.navbar');
    
hamburger.addEventListener('click', () => {

  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

const container = document.querySelector('.innerpage-hero');
const navbar = document.querySelector('.navbar-innerpage');
const heroTitle = document.querySelector('.innerpage-hero h1');
heroTitle.style.transform = `translateY(5px)`;

document.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const titleMove = Math.max(10 - (scrollPos * 0.25),-10);  
    const maxMove = 60; 
    const limitedMove = Math.min(titleMove, maxMove);  
    
    
    const verticalOffset = scrollPos * 0.1;
    
    container.style.backgroundPosition = `center ${verticalOffset}px`;
    
    heroTitle.style.transform = `translateY(${limitedMove}px)`;
    
    if(window.innerWidth >1200){

      if(scrollPos > 10){
          navbar.style.transform = `translateY(-100%)`;
      } else {
          navbar.style.transform = `translateY(0)`;
      }
    }
});







const scrolldown = document.querySelector('.scrolldown');

scrolldown.addEventListener('click', ()=> {
  console.log('clicked')
  window.scrollTo({
    top: window.innerHeight, // Scrolls down by the viewport height
    behavior: 'smooth' // Smooth scrolling effect
  });
});