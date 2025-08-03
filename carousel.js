const carousels = document.querySelectorAll('.image-carousel');
carousels.forEach((carousel) => {

	const updateCarouselState = bindCarouselUpdateFunction(carousel);

	updateCarouselState();
	carousel.addEventListener('scroll', updateCarouselState);
	window.addEventListener('resize', updateCarouselState);
});

function bindCarouselUpdateFunction(carousel) {
	return () => {
		const scrollLeft = carousel.scrollLeft;
		const scrollWidth = carousel.scrollWidth;
		const clientWidth = carousel.clientWidth;

		if (scrollLeft > 0) {
			carousel.classList.add('scrollable-left');
		}
		else {
			carousel.classList.remove('scrollable-left');
		}

		if (scrollWidth - clientWidth > scrollLeft) {
			carousel.classList.add('scrollable-right');
		} else {
			carousel.classList.remove('scrollable-right');
		}
	}
}

document.querySelectorAll('.image-carousel-right-button').forEach((button) => {
	button.addEventListener('click', (event) => {
		const carousel = event.target.nextElementSibling;
		carousel.scrollBy({ left: window.innerWidth / 60, behavior: 'smooth' });
	});
});

document.querySelectorAll('.image-carousel-left-button').forEach((button) => {
	button.addEventListener('click', (event) => {
		const carousel = event.target.nextElementSibling.nextElementSibling;
		carousel.scrollBy({ left: -window.innerWidth / 60, behavior: 'smooth' });
	});
});