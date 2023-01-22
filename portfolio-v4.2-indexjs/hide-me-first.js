let jason_count = 0;

function cmdRun() {
	const monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const daveType = ["extralong", "long", "short"];
	let cmd = $("#cmd").val().toLowerCase();
	let daveChance = 0;
	let today = "";

	switch (cmd) {
		case "exit":
			this.console.log("Switching to show-me-first");
			$("#caption").text("Computer Science Postgrad Student @ Sunway University");
			$("#hide-me-first").hide();
			$("#see-me-first").show();
			$("#cmd").val("");
			break;

		case "brainz":
			$("#caption").text("Brainz.");
			new this.Audio("assets/sounds/sukhbir_" + (Math.ceil(Math.random() * 2) + 4) + ".mp3").play();
			break;

		case "crazydave": case "crazy dave": case "crzydv": case "davidblazing": case "david blazing": case "crazetopher david blazing iii":
			$("#caption").text("Wabby wabbo.");

			daveChance = Math.random() * 3;
			if (daveChance > 1.5)
				new this.Audio("assets/sounds/crazydave_" + daveType[Math.floor(Math.random() * daveType.length)] + (Math.ceil(Math.random() * 3)) + ".mp3").play();
			else if (daveChance > .5) new this.Audio("assets/sounds/crazydave_scream" + (Math.ceil(Math.random() * 2)) + ".mp3").play();
			else new this.Audio("assets/sounds/crazydave_crazy.mp3").play();
			break;

		case "p": case "piggie": case "bad piggies":
			this.console.log("Fire in the hole! Pig incoming!");
			$("#caption").text("Fire in the hole! Pig incoming!");
			new this.Audio("assets/sounds/pigfly_" + (Math.ceil(Math.random() * 3)) + ".mp3").play();
			break;

		case "sukhbir":
			$("#caption").text("Brainz?");
			new this.Audio("assets/sounds/sukhbir_" + (Math.ceil(Math.random() * 6)) + ".mp3").play();
			break;

		case "x": // press 'X' for Jason
			this.console.log("Calling Jason..");

			jason_count++;
			if (jason_count % 11 == 0) {
				new this.Audio("assets/sounds/jason_11.mp3").play();
				$("#caption").text("Ja-mai-son, Jason (cries)");
			} else if (jason_count % 11 < 10) {
				new this.Audio("assets/sounds/jason_0" + (jason_count % 11) + ".mp3").play();
				if (jason_count % 11 <= 2) $("#caption").text("JASON?");
				else if (jason_count % 11 == 3) $("#caption").text("JASON!?");
				else if ((jason_count % 11 >= 4 && jason_count % 11 <= 6) || jason_count % 11 == 8) $("#caption").text("JASON!!");
				else if (jason_count % 11 == 7 || jason_count % 11 == 9) $("#caption").text("JASON");
			} else if (jason_count % 11 == 10) {
				new this.Audio("assets/sounds/jason_" + (jason_count % 11) + ".mp3").play();
				$("#caption").text("J-J-JASON");
			}
			break;

		case "eieio": $("#caption").text("Yeah, I'm not using that anymore."); break;
		case "jason": $("#caption").text("Press 'X' for Jason"); break;
		case "top secret code lever": $("caption").text("I used to think putting all my games in a sub-sub-sub-subfolder was cool."); break;

		/* ----- LINKS TO OTHER PAGES ----- */

		case "about": case "about me":
			window.location.replace("about/");
			break;

		case "cv": case "curriculum vitae":
			window.open("pdf/HHW_cv2019.pdf", "_blank");
			break;

		case "downloadables": case "wallpaper": case "wallpapers":
			window.location.replace("downloadables/");
			break;

		case "explored": case "christianity explored":
			window.location.replace("explored/");
			break;

		case "kcmcpray4covid19": case "pray4covid19": case "uniteKCMC":
			window.location.replace("pray4covid19/");
			break;

		case "poketypes": case "pokétypes":
			window.location.replace("poketypes/");
			break;

		case "portfolio":
			window.location.replace("portfolio/");
			break;

		case "results": case "transcript": case "transcripts":
			window.location.replace("transcripts/");
			break;

		case "resume":
			window.open("pdf/HHW_resume2019.pdf", "_blank");
			break;

		case "sukuru":
			window.open("pdf/sukuru-report.pdf", "_blank");
			break;

		case "": $("#caption").text("..."); break;

		default: $("#caption").text("Sorry, I didn't quite get that.");
	}
}