const leftArrowBlog = document.querySelector('.blog_left_arrow');
const rightArrowBlog = document.querySelector('.blog_right_arrow');
const sliderBlog = document.querySelector('.slider');
let currentIndexBlog = 0;
const cardsToShowBlog = 3;
const totalCardsBlog = document.querySelectorAll('.slider .card').length;

rightArrowBlog.addEventListener('click', () => {
  if (currentIndexBlog < totalCardsBlog - cardsToShowBlog) {
    currentIndexBlog++;
    sliderBlog.style.transform = `translateX(-${currentIndexBlog * (100 / cardsToShowBlog)}%)`;
  }
});

leftArrowBlog.addEventListener('click', () => {
  if (currentIndexBlog > 0) {
    currentIndexBlog--;
    sliderBlog.style.transform = `translateX(-${currentIndexBlog * (100 / cardsToShowBlog)}%)`;
  }
});





