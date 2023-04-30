const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
})