// dark mode
const dark = document.querySelector('#dark-button');

dark.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('dark-theme');
});


// hamburger menu
const hamburger = document.querySelector('#ham-menu');

hamburger.addEventListener('click', function() {
    document.querySelector('#nav-menu').classList.toggle('active');
});