const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.1
};

const intersectHandler = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		}
		else if (entry.boundingClientRect.top >= window.innerHeight) {
			entry.target.classList.remove("visible");
		}
	});
};

const observer = new IntersectionObserver(intersectHandler, options)
for (const article of document.querySelectorAll("section article")) {
	observer.observe(article);
}