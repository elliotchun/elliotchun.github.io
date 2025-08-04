const nav = document.querySelector('nav');
Iterator.from(nav.children).forEach((child) => {
	const openSection = (event) => {
		event.preventDefault();
		const targetId = child.innerText.toLowerCase();
		const target = document.getElementById(targetId);
		if (!target.classList.contains('visible')) {
            target.classList.add('visible');
		}
        else {
            target.classList.remove('visible');
		}
	};
	
	child.addEventListener('click', openSection);
	child.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			openSection(event);
		}
	});
});