const $navbar = $(".navbar");

$(window).on("load resize", function () {
	if (this.matchMedia("(min-width: 768px)").matches) {
		if ($navbar.hasClass("navbar-default")) $navbar.removeClass("navbar-default");
		if (!$navbar.hasClass("navbar-expand")) $navbar.addClass("navbar-expand");
	} else {
		if ($navbar.hasClass("navbar-expand")) $navbar.removeClass("navbar-expand");
		if (!$navbar.hasClass("navbar-default")) $navbar.addClass("navbar-default");
	}
});

const nonsense = [
	"...",
	// "Who knows when I'll stop tweaking this dang website. It's v4 now!",
	"Who knows when I'll stop tweaking this dang website. It's v4 now.. oh.",
	"Lorem ipsum your ass. This is not a beta version!",
	"Ciphers are the best messages one can send.",
	"Like my simplistic landing page?",
	"Howdy, I'm Henry. But you can call me Henry.",
	"Next iteration I may try to use something else.. who knows at this point.",
	"0321343",
	"18107508",
	"110358",
	"Press 'P' for Flying Piggies",
	"Press 'X' for Jason",
	"You may KONAMI this thing if you want.",
	// "We're stuck inside.. AND WE DON'T HAVE A CHOICE!!!",	// while COVID-19 is still on -_-
	"Is it safe to hug each other yet?",	// while COVID-19 is still on -_-
	"Be the good hypocrite",
	"Galatians 5:13",
];
let quote = nonsense[Math.floor(Math.random() * nonsense.length)];
$("#presto-chango").html(quote);

setInterval(() => {
	let quote = nonsense[Math.floor(Math.random() * nonsense.length)];
	$("#presto-chango").html(quote);
}, 2500);

// Reference: https://api.jquery.com/event.which/

const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konami_trigger = 0;
let cmd = "";

$(window).on("load", () => this.konami_trigger = 0);	// needed, otherwise this.konami_trigger starts at undefined and first correct keypress equals 0 instead of 1

$(window).on("keydown", (e) => {
	// this.console.log(e.which);
	if ($("#hide-me-first").css("display") == "block") {
		if (e.which == 13) this.cmdRun();	// hide-me-first.js
	} else {
		if (e.which == 88 || e.keyCode == 128) {
			this.console.log("Calling Jason..");
			new this.Audio("assets/sounds/jason_00.mp3").play();
		} else if (e.which == 80 || e.keyCode == 120) {
			this.console.log("Fire in the hole! Pig incoming!");
			new this.Audio("assets/sounds/pigfly_" + (Math.ceil(Math.random() * 3)) + ".mp3").play();
		}

		if (
			(e.which == 65 && this.konami_trigger == 9) ||
			(e.which == 66 && this.konami_trigger == 8) ||
			(e.which == 37 && (this.konami_trigger == 4 || this.konami_trigger == 6)) ||
			(e.which == 39 && (this.konami_trigger == 5 || this.konami_trigger == 7)) ||
			(e.which == 40 && (this.konami_trigger >= 2 && this.konami_trigger < 4))
		) {
			this.konami_trigger++;
		} else if (e.which == 38 && this.konami_trigger < 3) {
			if (this.konami_trigger == 2) this.konami_trigger = 2;
			else if (this.konami_trigger == 1) this.konami_trigger++;
			else this.konami_trigger = 1;
		} else this.resetKonami();

		if (this.konami_trigger == 10) {
			this.console.log("Switching to hide-me-first");
			$("#see-me-first").hide();
			$("#hide-me-first").show();
			this.resetKonami();

			$("#caption").text("Wow.. what's this?");
		}

		this.console.log("Konami: " + this.konami_trigger);
	}
});

/**
 * resets any record of keyboard strokes that may lead to the Konami code
 */
function resetKonami() {
	if (this.konami_trigger != 0) this.konami_trigger = 0;
	console.log("Konami Reset");
}
