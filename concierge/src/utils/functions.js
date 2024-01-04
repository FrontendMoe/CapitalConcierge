function scrollToSection(sectionId, margin = 50) {
	var section = document.getElementById(sectionId);
	if (section) {
		var sectionTop = section.offsetTop;
		window.scrollTo({
			top: sectionTop - margin,
			behavior: 'smooth',
		});
	}
}

export { scrollToSection };
