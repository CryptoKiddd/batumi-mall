const container = document.querySelector('.innerpage-hero');
const navbar = document.querySelector('.navbar-innerpage');

document.addEventListener('scroll', () => {
    



  const scrollPos = window.scrollY;
  const scaleFactor = 100 + scrollPos * 0.05;

 container.style.backgroundSize = `${scaleFactor}%`;
  // Move the navbar upwards as the user scrolls down
  console.log(scrollPos)
  if(scrollPos > 10){
    navbar.style.transform = `translateY(-100%)`;

  }else{
    navbar.style.transform = `translateY(0)`;
  }
 


});