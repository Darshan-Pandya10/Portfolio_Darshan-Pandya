const scrollUp = document.querySelector('.top-arrow');

scrollUp.addEventListener('click',() => {
window.scrollTo({ top: 0, behavior: 'smooth' });
})