const header = document.querySelector('.header');
const menubtn = document.getElementById('menubtn');
const navbar = document.querySelector('.navbar');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Change header background on scroll
    if (scrollTop > 55) {
        header.classList.add('active'); // Add active class when scrolled down
    } else {
        header.classList.remove('active'); // Remove active class when at the top
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Toggle navbar visibility on menu button click
// menubtn.addEventListener('click', function() {
//     navbar.classList.toggle('active'); 
// });
// document.getElementById('menubtn').addEventListener('click', function() {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('active'); // Toggle the active class
//     const header = document.querySelector('header');
//     header.classList.toggle('active'); // Toggle header background
// });

document.getElementById('menubtn').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle the active class for navbar

    // Change the icon
    if (navbar.classList.contains('active')) {
        this.classList.add('close'); // Add class to change to cross
        this.classList.remove('bx-menu'); // Remove hamburger icon class
        this.classList.add('bx-x'); // Add cross icon class (assuming you have a cross icon)
    } else {
        this.classList.remove('close'); // Remove class to revert to hamburger
        this.classList.remove('bx-x'); // Remove cross icon class
        this.classList.add('bx-menu'); // Add hamburger icon class back
    }
});
