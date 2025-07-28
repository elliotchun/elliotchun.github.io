const imageCarousels = document.querySelectorAll('.image-carousel');
imageCarousels.forEach(carousel => {
	const images = carousel.querySelectorAll('img');
	let currentIndex = 0;

	const showImage = (index) => {
		images.forEach((image, i) => {
			image.style.display = i === index ? 'block' : 'none';
		});
	};

	const nextImage = () => {
		++currentIndex;
		currentIndex %= images.length;
		showImage(currentIndex);
	}
	
	showImage(currentIndex);
	setInterval(nextImage, 5000);
});