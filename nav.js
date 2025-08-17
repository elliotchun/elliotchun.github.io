const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');
navButtons.forEach(button => {
	button.addEventListener('click', () => {
		const targetId = button.getAttribute('data-target');
		const targetSection = document.getElementById(targetId);

		// Update active nav button
		navButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');

		// Show target section
		sections.forEach(section => {
			section.classList.remove('visible');
		});
		targetSection.classList.add('visible');

		// Scroll to section
		targetSection.scrollIntoView({ behavior: 'smooth' });
	});
});