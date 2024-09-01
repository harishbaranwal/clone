const leftArrowA = document.querySelector('.left-arrow');
const rightArrowA = document.querySelector('.right-arrow');
const sliderA = document.querySelector('.top-bar_slider ul');
const itemsA = sliderA.querySelectorAll('li');
let indexA = 0;

const updateSliderA = () => {
    sliderA.style.transform = `translateX(-${indexA * 100}%)`;
};

const nextSlideA = () => {
    indexA = (indexA + 1) % itemsA.length;
    updateSliderA();
};

const prevSlideA = () => {
    indexA = (indexA - 1 + itemsA.length) % itemsA.length;
    updateSliderA();
};

rightArrowA.addEventListener('click', nextSlideA);
leftArrowA.addEventListener('click', prevSlideA);

setInterval(nextSlideA, 5000);




// JavaScript to toggle the dropdowns
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.footer-column h3');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the 'show' class on the corresponding ul
            const list = this.nextElementSibling;
            list.classList.toggle('show');

            // Toggle the 'active' class on the h3 for the arrow direction
            this.classList.toggle('active');
        });
    });
});




function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Add this to handle dropdown toggling in the sidebar
document.querySelectorAll('.sidebar>.nvabar>ul>.dropdown > a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        let dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});











document.querySelector('.fa-search.left_search_icon').addEventListener('click', function() {
    document.getElementById('searchBox').style.display = 'flex';
});

document.querySelector('.fa-search.right_search_icon').addEventListener('click', function() {
    document.getElementById('searchBox').style.display = 'flex';
});




document.getElementById('closeSearch').addEventListener('click', function() {
    document.getElementById('searchBox').style.display = 'none';
});




document.querySelector('.fa-user').addEventListener('click', () => {
    document.getElementById('signupModal').style.display = 'block';
});



document.querySelector('.modal .close').addEventListener('click', () => {
    document.getElementById('signupModal').style.display = 'none';
});











const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




















