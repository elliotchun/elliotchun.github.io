const options = {
	root: null,
	rootMargin: '0px 0px -50px 0px',
	threshold: 0.1
};

const intersectHandler = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
};

const observer = new IntersectionObserver(intersectHandler, options)

document.querySelectorAll('.fade-in').forEach(element => {
	observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
	const checkVisibility = () => {
		const fadeElements = document.querySelectorAll('.fade-in');
		fadeElements.forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom > 0) {
				el.classList.add('visible');
			}
		});
	};

	window.addEventListener('scroll', checkVisibility);
	checkVisibility();
});