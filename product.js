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






window.addEventListener("scroll", function() {
    var leftProductImg = document.querySelector('.left_product_img');
    var rightProductDetails = document.querySelector('.right_product_details');

    var rect = rightProductDetails.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.bottom <= windowHeight) {
        // leftProductImg.style.position = 'absolute';
        leftProductImg.style.top = (rightProductDetails.offsetHeight - leftProductImg.offsetHeight) + 'px';
    } else {
        leftProductImg.style.position = 'sticky';
        leftProductImg.style.top = '20px'; // Same as the CSS top value
    }
});



function toggleCartSidebar() {
    var sidebar = document.getElementById("cart-sidebar");
    sidebar.classList.toggle("open");
}






// Function to handle selection
function handleSelection(selector) {
    const options = document.querySelectorAll(selector);
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'selected' class and aria-selected attribute from all options in the same group
            options.forEach(opt => {
                opt.classList.remove('selected');
                opt.setAttribute('aria-selected', 'false');
            });
            // Add 'selected' class and aria-selected attribute to the clicked option
            this.classList.add('selected');
            this.setAttribute('aria-selected', 'true');
        });
    });
}

// Initialize selections
document.addEventListener('DOMContentLoaded', function() {
    // Default select the first option in each category
    const defaultSize = document.querySelector('.size-option:first-child');
    const defaultColor = document.querySelector('.colour-option:first-child');
    const defaultCombo = document.querySelector('.combo_offer_item:first-child');

    if (defaultSize) {
        defaultSize.classList.add('selected');
        defaultSize.setAttribute('aria-selected', 'true');
    }
    if (defaultColor) {
        defaultColor.classList.add('selected');
        defaultColor.setAttribute('aria-selected', 'true');
    }
    if (defaultCombo) {
        defaultCombo.classList.add('selected');
        defaultCombo.setAttribute('aria-selected', 'true');
    }

    // Add event listeners to handle selection
    handleSelection('.size-option');
    handleSelection('.colour-option');
    handleSelection('.combo_offer_item');
});









// Function to delete a cart item when the delete button is clicked
function deleteCartItem(event) {
    // Prevent the default anchor behavior
    event.preventDefault();
    
    // Find the parent li element (cart item) and remove it
    const cartItem = event.target.closest('.cart-item');
    cartItem.remove();
}

// Add event listener to existing delete buttons
document.querySelectorAll('.delete-item').forEach(function(deleteButton) {
    deleteButton.addEventListener('click', deleteCartItem);
});

// Ensure new cart items also have the delete functionality
function addCartItem(mainImageSrc, productTitle, selectedSize, oldPrice, currentPrice) {
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';

    cartItem.innerHTML = `
        <a href="#"><img src="${mainImageSrc}" alt="Product Image" class="cart-item-img"></a>
        <div class="cart-item-info">
            <h3 class="cart-item-title"><a href="#">${productTitle}</a></h3>
            <p class="cart-item-description">${selectedSize}</p>
            <div class="cart-item-quantity">
                <span class="quantity-decrease">-</span>
                <span class="quantity-number">1</span>
                <span class="quantity-increase">+</span>
            </div>
        </div>
        <div class="cart-item-price">
            <span class="delete-item">&times;</span>
            <p class="original-price"><del>${oldPrice}</del></p>
            <h3 class="current-price">${currentPrice}</h3>
        </div>
    `;

    // Add delete event listener to the new item
    cartItem.querySelector('.delete-item').addEventListener('click', deleteCartItem);

    // Append the new item to the cart list
    document.querySelector('.cart-details ul').appendChild(cartItem);
}

// Example usage: dynamically add a new cart item
document.querySelector('.primary-button').addEventListener('click', function() {
    // Get the selected size and other details
    const selectedSize = document.querySelector('.size-option.selected').textContent.trim();
    const mainImageSrc = document.getElementById('main-image').src;
    const productTitle = document.querySelector('.product-title').textContent.trim();
    const oldPrice = document.querySelector('.old_price span').textContent.trim();
    const currentPrice = document.querySelector('.original_price').textContent.trim();

    // Add the cart item
    addCartItem(mainImageSrc, productTitle, selectedSize, oldPrice, currentPrice);

    // Open the cart sidebar
    toggleCartSidebar();
});

// Function to toggle the cart sidebar visibility
function toggleCartSidebar() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}
























document.addEventListener('DOMContentLoaded', () => {
  // Get the Add to Cart button
  const addToCartButton = document.querySelector('#add-to-cart-button');

  // Add event listener to the Add to Cart button
  addToCartButton.addEventListener('click', () => {
    // Get item details
    const mainImageSrc = document.querySelector('#main-image').src;
    const title = document.querySelector('h1').textContent;
    const size = document.querySelector('.size-option').textContent;
    const oldPrice = document.querySelector('.old_price span').textContent;
    const originalPrice = document.querySelector('.original_price').textContent;
    const currentPrice = document.querySelector('.current-price').textContent;

    // Create a new list item for the cart
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <a href=""><img src="${mainImageSrc}" alt="Product Image" class="cart-item-img"></a>
      <h3 class="cart-item-title"><a href="">${title}</a></h3>
      <p class="cart-item-description">${size}</p>
      <p class="original-price"><del>${oldPrice}</del></p>
      <h3 class="current-price">${currentPrice}</h3>
    `;

    // Append the new item to the cart
    document.querySelector('#cart').appendChild(cartItem);
  });
});
