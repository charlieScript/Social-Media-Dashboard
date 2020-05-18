const toggler = document.querySelector('.switch #check');

toggler.addEventListener('input', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

