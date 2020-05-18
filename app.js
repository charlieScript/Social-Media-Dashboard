const toggler = document.querySelector('.switch #check');

// current theme
const currentTheme = localStorage.getItem('theme');

// check for current theme 
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggler.checked = true;
    }
}

toggler.addEventListener('input', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // local storgae
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    }
})

