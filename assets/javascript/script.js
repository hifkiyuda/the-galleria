// dark mode
const darkModeKey = 'DARK-MODE';

const darkMode = () => {
    document.querySelector('body').classList.toggle('dark-theme');
    localStorage.setItem(darkModeKey, 'dark');
}

const lightMode = () => {
    document.querySelector('body').classList.remove('dark-theme');
    localStorage.setItem(darkModeKey, 'light');
}

if (typeof(Storage) !== 'undefined') {
    if (localStorage.getItem(darkModeKey) === null) {
        localStorage.setItem(darkModeKey, 'light');
    }

    const button = document.querySelector('#dark-button');

    if(localStorage.getItem(darkModeKey) === 'dark') {
        darkMode();
    }

    button.addEventListener('click', function() {
        const theme = localStorage.getItem(darkModeKey);
        if(theme === 'light') {
            darkMode();
        }else {
            lightMode();
        }
    });
}

// hamburger menu
const hamburger = document.querySelector('#ham-menu');

hamburger.addEventListener('click', function() {
    document.querySelector('#nav-menu').classList.toggle('active');
});