function scrollCards(direction) {
    const container = document.querySelector('.container');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    const scrollAmount = direction * cardWidth * 3;

    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}