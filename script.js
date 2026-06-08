
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add('active');}
});
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');

}, 4000);