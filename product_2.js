document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Get the actual answer element
        const icon = question.querySelector('.toggle-icon');
  
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.classList.add('rotate');
        } else {
            answer.style.display = 'none';
            icon.classList.remove('rotate');
        }
    });
  });
  
  
  
  let currentImageIndex = 0;
  const images = ['./assets/product_img_1.webp', './assets/product_img_2.webp', './assets/product_img_3.webp','./assets/product_img_4.webp','./assets/product_img_5.webp','./assets/product_img_6.webp','./assets/product_img_7.webp','./assets/product_img_8.webp','./assets/product_img_9.webp','./assets/product_img_10.jpg',]; // Add more images as needed
  
  function changeImage(src) {
      document.getElementById('main-image').src = src;
  }
  
  document.querySelector('.arrow-left').addEventListener('click', () => {
      currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
      changeImage(images[currentImageIndex]);
  });
  
  document.querySelector('.arrow-right').addEventListener('click', () => {
      currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
      changeImage(images[currentImageIndex]);
  });
  
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
      // Select all dropdown buttons
      const dropdownButtons = document.querySelectorAll('.dropdown_button');
  
      dropdownButtons.forEach(button => {
          button.addEventListener('click', function () {
              // Toggle active class on the clicked button
              this.classList.toggle('active');
              
              // Get the corresponding dropdown content
              const dropdownContent = this.nextElementSibling;
              
              // Toggle the visibility of the dropdown content
              if (dropdownContent.style.display === "block") {
                  dropdownContent.style.display = "none";
              } else {
                  // Close other open dropdowns
                  document.querySelectorAll('.dropdown_content').forEach(content => {
                      if (content !== dropdownContent) {
                          content.style.display = "none";
                          content.previousElementSibling.classList.remove('active');
                      }
                  });
                  dropdownContent.style.display = "block";
              }
          });
      });
  });
  