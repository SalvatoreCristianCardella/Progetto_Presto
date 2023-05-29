let navbar = document.querySelector('.navbar-custom');
console.dir(navbar)
console.log(navbar);
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#303030';
    }
    else{
        navbar.style.backgroundColor = `transparent`
    }
});
