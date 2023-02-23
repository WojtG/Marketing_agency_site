const closeButton = document.querySelector('.nav__close-button');
const openButton = document.querySelector('.nav__open-button');
const nav = document.querySelector('nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('open_nav');
});

openButton.addEventListener("click", () => {
    nav.classList.add('open_nav');
});