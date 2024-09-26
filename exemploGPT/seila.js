const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

document.querySelector('.prev').addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
    });
});

document.querySelector('.next').addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
});
