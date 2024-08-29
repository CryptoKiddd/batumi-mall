const container = document.querySelector('.innerpage-hero');
const navbar = document.querySelector('.navbar-innerpage');
const heroTitle = document.querySelector('.innerpage-hero h1');
heroTitle.style.transform = `translateY(40px)`;

document.addEventListener('scroll', () => {
    



  const scrollPos = window.scrollY;
  const titleMove = 40 - (scrollPos *0.25 )
  const scaleFactor = 100 + scrollPos * 0.05;

 container.style.backgroundSize = `${scaleFactor}%`;
 heroTitle.style.transform = `translateY(${titleMove}px)`;
  // Move the navbar upwards as the user scrolls down
  console.log(scrollPos)
  if(scrollPos > 10){
    navbar.style.transform = `translateY(-100%)`;

  }else{
    navbar.style.transform = `translateY(0)`;
  }
 


});