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
function mailTo() {
	window.open(
		"mailto:Jbourn@capitalconcierge.org?subject=I'm%20Interested%20in%20learning%20more%20about%20Capital%20Concierge",
		'_blank'
	);
}

export { scrollToSection, mailTo };
