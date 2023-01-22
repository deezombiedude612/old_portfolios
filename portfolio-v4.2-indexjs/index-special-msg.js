const currentDate = new Date();
const currentYear = currentDate.getFullYear();

/**
 * Adds a special message on the landing page
 * @param {String} special_message 
 * @param {String} hover_base 
 * @param {String} hover_extra 
 */
function setSpecialMsg(special_message, hover_base, hover_extra) {
	$(".special-msg").html(special_message);

	$(".special-msg").css("text-shadow", hover_base);
	$(".special-msg").hover(function () {
		$(this).css("text-shadow", hover_base + ", " + hover_extra);
	}, function () {
		$(this).css("text-shadow", hover_base);
	});
}

/**
 * Pokémon 25th Anniversary (27 February 2021)
 */
const pokemon25anniversary = new Date(2021, 1, 27);
if (currentDate < pokemon25anniversary) {
	setSpecialMsg(`Initiating countdown..`,
		"0 0 7.5px red, 0 0 1em white, 0 0 2em yellow, 0 0 3em white",
		"0 0 1em red, 0 0 1.5em white, 0 0 3em yellow, 0 0 5em white"
	);

	const pokemon25anniversaryTime = pokemon25anniversary.getTime();

	setInterval(() => {
		let dateNow = new Date().getTime();	// get today's date and time
		let timeDiff = pokemon25anniversaryTime - dateNow;	// get time difference

		if (timeDiff > 0) {
			let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

			let countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

			setSpecialMsg(`PKMN25 in ${countdownString}`,
				"0 0 7.5px red, 0 0 1em white, 0 0 2em yellow, 0 0 3em white",
				"0 0 1em red, 0 0 1.5em white, 0 0 3em yellow, 0 0 5em white"
			);
		}
	}, 1000);

} else if (currentDate == pokemon25anniversary) {
	setSpecialMsg("Happy 25th Anniversary, Pokémon!!",
		"0 0 7.5px red, 0 0 1em white, 0 0 2em yellow, 0 0 3em white",
		"0 0 1em red, 0 0 1.5em white, 0 0 3em yellow, 0 0 5em white"
	);
}

/* blasted stupid CMCO a la Selangor version */
// const klangCovidDate1 = new Date(2020, 9, 9), klangCovidDate2 = new Date(2020, 9, 26);
const klangCovidDate1 = new Date(2020, 9, 9), klangCovidDate2 = new Date(2020, 10, 9);
if (currentDate >= klangCovidDate1 && currentDate <= klangCovidDate2) {
	const msgArray = [
		"Get your act together, ya imbeciles!",
		"Welcome to the family, non-Klangites.",
		"We're all stuck inside.. and WE DON'T HAVE ANY CHOICE!!",
		"Let's not make this any worse than how it is now, okay?",
		"Take care of yourselves, please.",
	];
	const klangCovidMsg = `<br>${msgArray[Math.floor(Math.random() * msgArray.length)]}<br><span class="chineseFont">#</span>KlangLockdown <span class="chineseFont">#</span>SelangorCMCO`;
	setSpecialMsg(`Initiating countdown..${klangCovidMsg}`,
		"0 0 7.5px red, 0 0 1em red, 0 0 2em red, 0 0 3em red",
		"0 0 1em red, 0 0 1.5em red, 0 0 3em magenta, 0 0 5em magenta"
	);

	const klangCovidDate2Time = klangCovidDate2.getTime();

	setInterval(() => {
		let dateNow = new Date().getTime();	// get today's date and time
		let timeDiff = klangCovidDate2Time - dateNow;	// get time difference

		if (timeDiff > 0) {
			let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

			let countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

			setSpecialMsg(`${countdownString}${klangCovidMsg}`,
				"0 0 7.5px red, 0 0 1em red, 0 0 2em red, 0 0 3em red",
				""
			);
		}
	}, 1000);
}

/* Malaysia National Day Slogan: August 1, 2020 to Sept 1, 2020 */
if (currentDate >= new Date(2020, 7, 1) && currentDate <= new Date(2020, 8, 1)) {
	setSpecialMsg("Malaysia Prihatin",
		"0 0 7.5px white, 0 0 1em red, 0 0 2em blue, 0 0 3em yellow",
		"0 0 1em yellow, 0 0 1.5em red, 0 0 3em blue, 0 0 5em yellow"
	);
}

/* appreciation for frontliners in COVID-19 pandemic #lightitblue: April 30, 2020 to May 28, 2020 */
if (currentDate >= new Date(currentYear, 3, 30) && currentDate <= new Date(currentYear, 4, 28)) {
	$(".special-msg").html("Thank you frontliners!");
	// let hover_base = "0 0 7.5px blue, 0 0 22.5px blue, 0 0 37.5px blue, 0 0 50px aqua";
	let hover_base = "0 0 7.5px blue, 0 0 1em blue, 0 0 2em blue, 0 0 3em aqua";
	$(".special-msg").css("text-shadow", hover_base);
	$(".special-msg").hover(function () {
		$(this).css("text-shadow", hover_base + ", 0 0 3em blue, 0 0 5em aqua");
	}, function () {
		$(this).css("text-shadow", hover_base);
	});
}