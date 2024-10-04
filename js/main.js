// script for slider for mobile view
let currentSlide = 1;

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    slides.forEach(slide => slide.classList.remove('active'));

    dots.forEach(dot => dot.classList.remove('active'));

    slides[n - 1].classList.add('active');
    dots[n - 1].classList.add('active');

    currentSlide = n;
}