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