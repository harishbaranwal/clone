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








