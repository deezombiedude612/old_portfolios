$(function() {
	$(window).scroll(function () {
		if($(this).scrollTop() >= $('#see-me-first').position().top) {
			$('body').addClass('see-bkg-first')
		}
		if($(this).scrollTop() >= $('#abt-me').position().top - Math.floor(window.innerHeight / 4)) {
			$('body').removeClass('see-bkg-first')
		}
	});
});