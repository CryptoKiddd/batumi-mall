const container = document.querySelector('.innerpage-hero');
const navbar = document.querySelector('.navbar-innerpage');
const heroTitle = document.querySelector('.innerpage-hero h1');
heroTitle.style.transform = `translateY(20px)`;

document.addEventListener('scroll', () => {
    



  const scrollPos = window.scrollY;
  const titleMove = Math.max(40 - (scrollPos * 0.25), -20);  // scrool base transformistvis range
  const maxMove = 60;  // max range 
  const limitedMove = Math.min(titleMove, maxMove);  
  
  console.log(limitedMove);
  
  const scaleFactor = 100 + scrollPos * 0.05;
  
  container.style.backgroundSize = `${scaleFactor}%`;
  heroTitle.style.transform = `translateY(${limitedMove}px)`;
  heroTitle.style.fontSize = `110px`;
  // Move the navbar upwards as the user scrolls down
  if(scrollPos > 10){
    navbar.style.transform = `translateY(-100%)`;

  }else{
    navbar.style.transform = `translateY(0)`;
  }
 


});


const hamburger = document.getElementById('hamburger');
const mobileNav = document.querySelector('.navbar');
    
hamburger.addEventListener('click', () => {

  hamburger.classList.toggle('active');
  mobileNav.style.transform= "`translateX(0%)"
});



const scrolldown = document.querySelector('.scrolldown');
console.log(scrolldown)

scrolldown.addEventListener('click', ()=> {
  console.log('clicked')
  window.scrollTo({
    top: window.innerHeight, // Scrolls down by the viewport height
    behavior: 'smooth' // Smooth scrolling effect
  });
});