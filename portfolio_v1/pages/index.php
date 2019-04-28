<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 29/07/2018
	 * Time: 00:54
	 */
	include "../db.php";
	?>

<!DOCTYPE html>

<html lang="en">
<head>
	<title>Henry Heng | Computer Science Researcher in the Making</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial scale=1.0">
	
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">

	<link rel="stylesheet" href="../css/hamburgers.css">
	
	<link rel="shortcut icon" href="../images/hhicon.png">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!-- external Javascript -->
	<script type="text/javascript" src="../js/main.js"></script>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-78618719-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-78618719-2');
	</script>
</head>

<body class="index">
	<div class="wrapper">
		<nav class="clearfix">
			<a href="index.php"><img src="../images/name@2x.png"></a>
<!--			<div class="nav_other" onclick="myFunction(this)">-->
<!--				<div class="bar1"></div>-->
<!--				<div class="bar2"></div>-->
<!--				<div class="bar3"></div>-->
<!--			</div>-->
			<button class="hamburger hamburger--emphatic" style="padding: 15px 0 0 15px;" type="button" onclick="toggleHamburger(this)">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
				<span class="hamburger-label">MENU</span>
			</button>
			<br>
			<ul class="ul-toggle">
				<li><a class="nav_other" href="https://dzdpersonaldevelopment.wordpress.com/">Personal Development</a></li>
				<li><a class="nav_other" href="communityService.php">Community Service</a></li>
			</ul>
		</nav>
		
		<header>
			<h1>WELCOME TO HENRY'S WEBSITE!</h1>
			<p>I'm sorry, what?</p>
		</header>

		<!-- ABOUT ME -->

		<div class="block">
			<div style="display: inline; vertical-align: center;">
				<img class="about-portrait" src="../images/portrait.JPG" style="">
			</div>
			<div class="translucent about-column" style="">
				<div class="about-me">
					<h1>HEY THERE, HI THERE, HO THERE!</h1><br>
					<p>
						I'm Henry. I have recently completed my Bachelor's degree in Computer Science from
						<a href="https://university.taylors.edu.my" target="_blank">Taylor's University Malaysia</a>.
<!--						Now, I am pursuing my MSc in Computer Science (By Research) at-->
						I will pursuing my MSc in Computer Science (By Research) in January 2019 at
						<a href="https://university.sunway.edu.my" target="_blank">Sunway University</a>. My current
						interests revolve around Mathematics, Algorithms, Cryptography and Network Security, Theory of
						Computation, Artificial Intelligence, and mobile games.
					</p><br>
					<p>
						I picked up basic skills with the computer quick at an early age, and I enjoyed being able to
						help my friends and family in teaching them these skills. I ended up pursuing Computer Science,
						hoping that I can soon be able to help as many people as I can with what I can do with a
						machine.
					</p><br>
					<p>
						Apart from my interests in Computing, I have a knack for mathematics. The challenges this field
						poses often fascinate me, as I enjoy being able to tackle problems that stimulate my thinking
						process. I often feel that I like dealing with numbers more than with words, thus my trait of
						always looking at situations from an analytical perspective, wherever applicable.
					</p><br>
					<p>
						When I'm not in front of the computer, you can find me solving math problems or sudoku puzzles,
						or just sitting at a corner fighting waves of zombies with a league of plants. #plantsvszombies
					</p>
				</div>
			</div>
		</div>

		<div class="hr">
			<img src="../images/line.png">
		</div>

		<!-- ACADEMIC BACKGROUND -->

		<div class="block">
			<div class="acad_bkg">
				<h1>ACADEMIC BACKGROUND</h1>
				
				<div class="col2">
					<a href="https://university.sunway.edu.my" target="_blank"><img src="../images/Sunway_logo.jpg"></a>
				</div>
				<div class="col1">
					<h2>MSc in Computer Science (By Research)</h2>
					<h3>Sunway University, MALAYSIA<!-- | Current CGPA: 3.76 / 4.00--></h3>
					<h3>January 2019 - Present</h3>
<!--					<p>* no description here yet *</p>-->
					<ul class="content">
						<li class="content">
							Dual-award programme with Lancaster University, UK
						</li>
						<div class="acad_inside">
							<a href="http://www.lancaster.ac.uk/" target="_blank">
								<img src="../images/lancaster-university-logo.png" style="display: inline-block;">
							</a>
						</div>
						<li class="content">Tentative Completion Period: December 2020</li>
					</ul>
				</div>
				
				<br><br>
				
				<div class="col2">
					<a href="https://university.taylors.edu.my" target="_blank"><img src="../images/taylors-full-white.png"></a>
				</div>
				<div class="col1">
					<h2>Bachelor of Computer Science (Hons)</h2>
					<h3>Taylor's University Lakeside Campus, MALAYSIA | CGPA: 3.80 / 4.00</h3>
					<h3>August 2015 - July 2018</h3>
<!--					<p>Completed with Dean's List award in all academic semesters.</p>-->
					<ul class="content">
						<li class="content">
							Dual-award programme with University of West of England, Bristol: BSc(Hons) Computing
						</li>
						<div class="acad_inside">
							<a href="https://www.uwe.ac.uk/" target="_blank">
								<img src="../images/uwe_bristol_logo.png" style="display: inline-block;">
							</a>
						</div>
						<li class="content">Completed with Dean's List award in all academic semesters</li>
						<li class="content">Tertiary Merit Scholarship 2015 (MYR11k per year)</li>
					</ul>
				</div>
				
				<br><br>
				
				<div class="col2">
					<a href="https://university.taylors.edu.my" target="_blank"><img src="../images/taylors-full-white.png"></a>
				</div>
				<div class="col1">
					<h2>Foundation in Computing</h2>
					<h3>Taylor's University Lakeside Campus, MALAYSIA | CGPA: 3.63 / 4.00</h3>
					<h3>August 2014 - June 2015</h3>
<!--					<p>Completed with Distinction award, attained Dean's List award in all academic semesters</p>-->
					<ul class="content">
						<li class="content">Completed with Distinction award</li>
						<li class="content">Attained Dean's List award in all academic semesters</li>
						<li class="content">High Achievers' Scholarship 2014</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="hr">
			<img src="../images/line.png">
		</div>
		
		<!-- SKILLS -->
		
		<div class="block">
			<div class="skills">
				<h1>SKILLS</h1><br>
				<p>Behold, me skill set! All the skills listed here do not indicate proficiency or experience by order of appearance.</p>
			</div>
		</div>
		
		<div class="block">
			<div class="skills_col1 translucent">
				<h2>Languages</h2>
				<i class="devicon-c-plain"></i>
				<i class="devicon-cplusplus-plain"></i>
				<i class="devicon-csharp-plain"></i>
				<i class="devicon-java-plain-wordmark"></i>
				<i class="devicon-python-plain-wordmark"></i>
				<i class="devicon-php-plain"></i>
				<i class="devicon-html5-plain-wordmark"></i>
				<i class="devicon-css3-plain-wordmark"></i>
				<i class="devicon-javascript-plain"></i>
				<i class="devicon-mysql-plain-wordmark"></i>
				<img src="../images/R_white.png" alt="R">
				<img src="../images/LaTeX.png" alt="LaTeX">
			</div>
		</div>
		
		<div class="block">
			<div class="skills_col1 translucent2">
				<h2>Multimedia and Design</h2>
				<img src="../images/fcpx.png" alt="Final Cut Pro X">
				<img src="../images/audacity.png" alt="Audacity">
				<img src="../images/imovie.png" alt="iMovie">
				<img src="../images/photoshop.png" alt="Adobe Photoshop">
				<img src="../images/illustrator.png" alt="Adobe Illustrator">
				<img src="../images/adobe_xd.png" alt="Adobe Experience Design">
				<img src="../images/adobe_flash_pro.png" alt="Adobe Flash Professional">
				<img src="../images/adobe_indesign.png" alt="Adobe Indesign">
				<img src="../images/adobe-animate-logo.png" alt="Adobe Animate">
			</div>
		</div>
		
		<div class="block">
			<div class="skills_col1 translucent">
				<h2>Frameworks and Development</h2>
				<i class="devicon-android-plain"></i>
<!--				<i class="devicon-apple-original"></i>-->
				<!-- Unlock this one after mastering iOS development! -->
				<!--<svg viewBox="0 0 128 128">
					<path style="fill: #ffffff;" d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
				</svg>-->
				<i class="devicon-bootstrap-plain"></i>
				<i class="devicon-wordpress-plain"></i>
				<img src="../images/joomla_white.png" alt="Joomla!">
				<img src="../images/getmdl_white.png" alt="Material Design Lite">
			</div>
		</div>
		
		<!-- PORTFOLIO WORK -->
		

		<!-- CV and RESUME -->

		<div class="block">
			<div class="cv_area">
				<h2>Feel free to download a copy!</h2>
				<p>The following links will open a new tab in your browser.</p>
				<button type="button" onclick="window.open('../pdf/HHW_cv2018.pdf', '_blank')">CV</button>
				<button type="button" onclick="window.open('../pdf/HHW_resume2018.pdf', '_blank')">Resume</button>
				<p>You may also drop me an <a href="mailto:henryheng612@hotmail.com">e-mail</a> for further enquiries.</p>
			</div>
		</div>
		
		<footer>
			<p>@ <?php echo date("Y");?> Henry Heng</p>
			<a href="https://twitter.com/HenryHHW" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>&nbsp;
			<a href="https://www.instagram.com/deezombiedude/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>&nbsp;
			<a href="https://www.facebook.com/deezombiedude612" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>&nbsp;
			<a href="https://www.linkedin.com/in/henryheng612/" target="_blank"><i class="fa fa-linkedin fa-lg"></i></a>&nbsp;
			<a href="https://www.github.com/deezombiedude612" target="_blank"><i class="fa fa-github fa-lg"></i></a>&nbsp;
			<a href="https://www.youtube.com/user/deezombiedude612/" target="_blank"><i class="fa fa-youtube-play fa-lg"></i></a>
		</footer>
	</div>
</body>
</html>
