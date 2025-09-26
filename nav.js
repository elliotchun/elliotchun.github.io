const revealNav = document.querySelector('.nav-reveal');
const navButtons = document.querySelectorAll('nav>a>button');

revealNav.addEventListener('click', (event) => {
	navButtons.forEach(button => {
		button.classList.toggle('visible');
	});
	event.currentTarget.classList.toggle('active');
});