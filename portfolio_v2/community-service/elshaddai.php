<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 2019-01-02
	 * Time: 18:37
	 */
	
	?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<!-- Page Title -->
		<title>Henry Heng | CSI: ESRLC</title>
		
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
		
		<div class="wrapper">
			<div class="journal">
				<h2 class="mini_title">EL-SHADDAI REFUGEE LEARNING CENTER (02/2014 - 04/2014)</h2>
				<p class="quote">
					“What I believe in is that non-continuous efforts will only bring you so far, but continuous efforts
					will continue to soar over time.”
					<br>– Sukuru Report (Student ID 11873)
				</p>
				<br>
				<p>
					This took place when I was still studying in Methodist College Kuala Lumpur (MCKL). During that
					time, the college had decided that it would be made compulsory for everyone starting from my intake
					onwards, being the January 2014 Intake, to take the MPW modules (Character Formation and Service
					Learning). I had only spent a semester in MCKL, but during that time I was able to complete the
					Service Learning module. The module requires us to commit 20 hours to community service at one of
					MCKL’s service learning partner organisations to be selected by each group, giving us a variety of
					choices of what to commit to the organisation of our choice. We were then supposed to keep a log of
					every activity we carried out during that time and report to the lecturer in-charge, Ms Rachel Chua,
					to keep track on our progress.
				</p>
				<p>
					My team comprised of Chau Ting Feng, Cheong Hsien Hwa, Teo Lee Hong and myself, all from the 1401D
					cohort. We chose to go to the El-Shaddai Refugee Learning Centre (ESRLC). For those of you who do
					not know what it is, it is an organisation that takes in refugees of all kinds and provides basic
					necessities and shelter for them. As for the refugee children, they were also given education up to
					that of a primary school leaver standard. They currently depend on partnering churches for donations
					in the form of cash and food items. My team was able to contribute to the organisation by settling
					the book catalog in the library, but the most effort was put to work in the backyard garden, which
					was meant to teach the refugee children the importance of responsibility.
				</p>
				<p>
					It seemed as though I was the most enthusiastic one in visiting the ESRLC centre every time, whereas
					the others did not seem to get what they intended to do in the first place. However, we were able to
					resolve most problems together and managed to foster teamwork throughout this period of serving in
					ESRLC. The people in charge there were very kind to redirect us to anything that they need help
					with. By the end of the session, we were able to view the fruits of our labor; the book catalog was
					finally settled, and the garden was transformed from nothing but dust to a very healthy vegetation
					garden. The satisfaction we got was just sensational. Nothing could replace such experience, and on
					a personal note, that was one of the best experiences I had ever gone through upon stepping into
					MCKL. My teammates and I will never forget the time spent on the “Sukuru Report” (a name we gave to
					our final reports), but more importantly, we are and will always be the ESRLC Rookie Helpers!!!
				</p>
				<div class="video">
					<p>Note: This video plays straight from YouTube. You cannot play it if YouTube is banned in your region.</p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/0N75krHgO1Y?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
			<div style="text-align: center; padding-top: 50px;">
				<button type="button" onclick="window.open('../pdf/service-learning-logs.pdf', '_blank')">Henry's Log Reports</button>
				<button type="button" onclick="window.open('../pdf/sukuru-report.pdf', '_blank')">Henry's Final Report</button>
				<button type="button" onclick="window.open('http://www.mmkmalaysia.org/category/blogs/el-shaddai-ministries/', '_blank')">MMK Malaysia</button>
				<button type="button" onclick="window.open('https://mcklservicelearning.wordpress.com/', '_blank')">Ms Rachel's Wordpress Site*</button>
				<p>*Ms Rachel's Wordpress Site is no longer maintained.</p>
			</div>
			<br>
			<button type="button" onclick="location.href = '.';">BACK</button>
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
