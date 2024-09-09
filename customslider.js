const sliderWrapper = document.getElementById('sliderWrapper');
const progressBar = document.getElementById('progressBar');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentIndex = 0;
const totalItems = sliderWrapper.children.length;
let visibleItems = 4; // Number of items visible at a time
const itemWidth = sliderWrapper.children[0].offsetWidth + 10; // Width of each item including margin
const totalVisibleWidth = itemWidth * visibleItems;
const totalScrollWidth = itemWidth * (totalItems - visibleItems); // Total scrollable width
if(window.innerWidth < 550){
  visibleItems = 1
}
if(window.innerWidth < 769){
  visibleItems = 2
}
// Update progress bar
function updateProgressBar() {
  const progress = (currentIndex / (totalItems - visibleItems)) * 100;
  progressBar.style.width = `${progress}%`;
}

// Scroll slider to the current index
function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  updateProgressBar();
}

// Move slider left
leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Move slider right
rightArrow.addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Dragging functionality
let isDragging = false;
let startX;
let scrollLeft;

sliderWrapper.addEventListener('mousedown', (e) => {

        e.preventDefault();

  isDragging = true;
  sliderWrapper.classList.add('dragging');
  startX = e.pageX - sliderWrapper.offsetLeft;
  scrollLeft = sliderWrapper.style.transform
    ? -parseInt(sliderWrapper.style.transform.replace('translateX(', '').replace('px)', ''))
    : 0;
});

sliderWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  sliderWrapper.classList.remove('dragging');
});

sliderWrapper.addEventListener('mouseup', () => {
  isDragging = false;
  sliderWrapper.classList.remove('dragging');
});

sliderWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - sliderWrapper.offsetLeft;
  const walk = (x - startX) * 1.5; // Move faster
  let newPosition = scrollLeft - walk;
  newPosition = Math.max(0, Math.min(newPosition, totalScrollWidth)); // Limit scrolling
  sliderWrapper.style.transform = `translateX(-${newPosition}px)`;

  // Update the current index based on the new position
  currentIndex = Math.round(newPosition / itemWidth);
  updateProgressBar();
});
