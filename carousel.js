// const imageCarousels = document.querySelectorAll('.image-carousel');
// imageCarousels.forEach(carousel => {
// 	const images = carousel.querySelectorAll('img');
// 	let currentIndex = 0;

// 	const showImage = (index) => {
// 		let oldImage, newImage;

// 		images.forEach((image, i) => {
// 			if (i === index) {
// 				image.classList.remove('slide-out');
// 				image.classList.add('slide-in');
// 				newImage = image;
// 			}
// 			else {
// 				image.classList.remove('slide-in');
// 				image.classList.add('slide-out');
// 				oldImage = image;
// 			}
// 		});

// 		setTimeout(() => {
// 			if (oldImage) oldImage.style.display = 'none';
// 			if (newImage) newImage.style.display = 'block';
// 		}, 500);
// 	};

// 	const nextImage = () => {
// 		++currentIndex;
// 		currentIndex %= images.length;
// 		showImage(currentIndex);
// 	}
	
// 	showImage(currentIndex);
// 	setInterval(nextImage, 5000);
// });

