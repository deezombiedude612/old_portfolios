<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 2018-12-31
	 * Time: 02:55
	 */
	
	?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<!-- Page Title -->
		<title>Henry Heng | Community Service</title>
		
		<!-- Shortcut Icon -->
		<link rel="shortcut icon" href="../images/hhicon.png">
		
		<!-- Custom CSS -->
		<link rel="stylesheet" href="../css/csi.css">
		<link rel="stylesheet" href="../css/footer.css">
		<link rel="stylesheet" href="../css/nav.css">
		
		<!-- Font Awesome Icons CSS -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	</head>
	<!-- /head -->
	
	<body>
		<nav>
			<a href="../">Home</a>
			<a href="../about/">About Me</a>
			<a href="../projects/">Projects</a>
			<a href="https://deezombiedude612.wordpress.com" target="_blank">Personal Development</a>
			<a class="selected" href=".">Community Service</a>
		</nav>
		<!-- /nav -->
		
		<h1 id="front-title">COMMUNITY SERVICE</h1>
		<p style="text-align: center;">
			Hover over any of these cards to reveal a link to a short summary of my experiences with community service.<br>
			And for all those looking at this from where I was at for any of these periods, from the bottom of my heart,
		</p>
		<p style="font-size: 48px; font-family: 'BrianneTod', sans-serif; text-align: center;">THANK YOU!!!</p>

		<div class="wrapper">
			<div class="row">
				<div class="flip-card">
					<div class="flip-card-inner">
						<div class="flip-card-front gsh-card"></div>
						<div class="flip-card-back">
							<div class="v-middle">
								<h1>Good Samaritan Home</h1>
								<button type="button" onclick="location.href = 'goodsamaritanhome.php';">MORE</button>
							</div>
						</div>
					</div>
				</div>
				
				<div class="flip-card">
					<div class="flip-card-inner">
						<div class="flip-card-front elshaddai-card"></div>
						<div class="flip-card-back">
							<div class="v-middle">
								<h1>El-Shaddai Refugee Learning Center</h1>
								<button type="button" onclick="location.href = 'elshaddai.php';">MORE</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<footer>
			<p>@<?php echo date('Y'); ?> Henry Heng</p>
			<a href="https://twitter.com/HenryHHW" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>&nbsp;
			<a href="https://www.instagram.com/deezombiedude/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>&nbsp;
			<a href="https://www.facebook.com/deezombiedude612" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>&nbsp;
			<a href="https://www.linkedin.com/in/henryheng612/" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>&nbsp;
			<a href="https://www.github.com/deezombiedude612" target="_blank"><i class="fa fa-github fa-lg"></i></a>&nbsp;
			<a href="https://www.youtube.com/user/deezombiedude612/" target="_blank"><i class="fa fa-youtube-play fa-lg"></i></a>
		</footer>
		<!-- /footer -->
		
		<!-- collapsible JS script -->
		<script>
			var coll = document.getElementsByClassName('collapsible');
			var i;
		
			for(i = 0; i < coll.length; i++) {
				coll[i].addEventListener("click", function() {
					this.classList.toggle("active");
					let content = this.previousElementSibling;
					if (content.style.maxHeight){
						content.style.maxHeight = null;
					} else {
						content.style.maxHeight = content.scrollHeight + "px";
					}
				});
			}
		</script>
		<!-- /script-->
	</body>
	<!-- /body -->

</html>
<!-- /html -->
