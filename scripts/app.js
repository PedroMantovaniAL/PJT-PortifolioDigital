function buildCarousel() {
    const cardPool = document.querySelectorAll('#cardPool .card-wrapper');
    const carouselInner = document.querySelector('#carouselExample .carousel-inner');
    const carouselButtons = document.querySelectorAll('#carouselButtons .carousel-controls');
    const carousel = document.querySelector('#carouselExample');
    carouselInner.innerHTML = '';
    const isLargeScreen = window.innerWidth >= 1100;
    const cardsPerPage = isLargeScreen ? 3 : 2;

    let currentPage;
    let row;

    cardPool.forEach((cardWrapper, index) => {
        if (index % cardsPerPage === 0) {
            currentPage = document.createElement('div');
            currentPage.classList.add('carousel-item');
            if (index === 0) currentPage.classList.add('active');

            const container = document.createElement('div');
            container.classList.add('container', 'px-5');

            row = document.createElement('div');
            row.classList.add('row', 'justify-content-center');

            container.appendChild(row);
            currentPage.appendChild(container);
            carouselInner.appendChild(currentPage);
        }

        row.appendChild(cardWrapper.firstElementChild.cloneNode(true));
    });
    if (cardsPerPage === 2) {
        carouselButtons.forEach(button => {
            carousel.appendChild(button.firstElementChild.cloneNode(true));
        });
    } else {
        carousel.removeChild(carousel.querySelector('.carousel-controls'));
    }
}

window.addEventListener('load', buildCarousel);

window.addEventListener('resize', () => {
    clearTimeout(window._carouselResizeTimeout);
    window._carouselResizeTimeout = setTimeout(buildCarousel, 250);
});
