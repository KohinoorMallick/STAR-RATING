document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            let selectedValue = star.getAttribute('data-value');
            ratingValue.textContent = `Rating: ${selectedValue}`;
            for (let i = star.nextElementSibling; i; i = i.nextElementSibling) {
                i.classList.add('selected');
            }
        });

        star.addEventListener('mouseover', () => {
            stars.forEach(s => s.classList.remove('hover'));
            star.classList.add('hover');
            for (let i = star.nextElementSibling; i; i = i.nextElementSibling) {
                i.classList.add('hover');
            }
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
});
