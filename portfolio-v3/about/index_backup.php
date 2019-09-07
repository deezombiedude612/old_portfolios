<?php
    include "../mysql/connection.php";
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Henry Heng | About Me</title>

        <!-- Shortcut Icon -->
		<link rel="shortcut icon" href="../images/hhicon.png">

        <!-- Bootstrap CSS -->
        <link href="../css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome Icons CSS -->z
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

        <!-- External CSS -->
        <link href="../css/about.css" rel="stylesheet">
        <link href="../css/constant.css" rel="stylesheet">
        <link href="../css/footer.css" rel="stylesheet">
        <link href="../css/nav.css" rel="stylesheet">

        <!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-78618719-2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-78618719-2');
		</script>
    </head>

    <body>
        <!-- <nav class="navbar navbar-expand-xl navbar-light transparent navbar-inverse navbar-inner fixed-top"> -->
        <nav class="navbar navbar-expand-xl navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="../">
                    <img id="nav-logo" src="../images/hhicon.png" alt="nav-logo">
                </a>
                <!-- /a.navbar-brand -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- /button.navbar-toggler -->
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a class="nav-link" href=".">About Me<span class="sr-only">(current)</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../portfolio/">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="../blog/">Blog</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Miscellaneous
                            </a>
                            <!-- /a#navbarDropdownMenuLink -->
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="../community-service/">Community Service</a>
                                <a class="dropdown-item" href="https://deezombiedude612.wordpress.com/" target="_blank">Personal Development</a>
                            </div>
                            <!-- /div.dropdown-menu dropdown-menu-right -->
                        </li>
                        <!-- /li.nav-item dropdown -->
                    </ul>
                    <!-- /ul.navbar-nav ml-auto -->
                </div>
                <!-- /#navbarResponsive -->
            </div>
            <!-- /div#container-fluid -->
        </nav>
        <!-- /nav.navbar navbar-expand-xl navbar-light bg-light fixed-top -->

        <div class="container-fluid">
            <div class="h-100 d-inline-block div-panel" id="sec-intro">
                <h1>Hey there! Hi there! Ho there!</h1>
                <div class="col-xl-5 h-100 d-inline-block" id="intro-img-container">
                    <!-- <img src="../images/portrait.jpg" alt="portrait"> -->
                    <picture>
                        <source media="(max-width: 1210px)" srcset="../images/portrait_1210.jpg">
                        <img src="../images/portrait.jpg" alt="portrait">
                    </picture>
                    <h2 class="name-caption">Hian Wee (Henry) HENG <span class="chinese-text">王贤卫</span></h2>
                </div>
                <!-- /div#intro-img-container -->
                <div class="col-xl-7 h-100 d-inline-block" id="intro-text">
                    <p>
                        What's up! I'm Henry Heng. I'm a recent Computer Science graduate from Taylor's University, Malaysia. Currently I am pursuing MSc in Computer Science (By Research) at Sunway University, Malaysia. 
                        My research interests mainly revolve around Algorithm Analysis, Artificial Intelligence, Cybersecurity, and Cryptography. 
                        I enjoy solving Math problems, and playing an array of casual mobile games in my spare time. 
                    </p>
                    <p>
                        I sometimes tend to find myself brushing up on my programming skills while I no longer regularly attend formal classes on programming in any learning institution. 
                        My current preferred language is C++, but I am also familiar with C, Java and C#. 
                        I also have recently worked frequently with MySQL databases as well as various web development languages including HTML, CSS, PHP, JavaScript and jQuery.
                        At the moment, I am picking up on Python 3 and MATLAB, both of which I anticipate to use extensively as my time pursuing my Master's degree progresses further.
                    </p>
                    <p>
                        I have experience guiding weaker peers in subjects I enjoy and excel in, most of which were gained through my time as a peer leader during my undergraduate studies. 
                        Like many other people, I procrastinate a lot, but that is something I'm not afraid to admit; that is a must if I ever want to learn to get back up and continue doing what I'm supposed to do!
                    </p>
                    <hr>
                    <div id="downloadables">
                        <h2>Feel free to download a copy!</h2>
                        <p>The following links will open a new tab on your browser.</p>
                        <a class="btn btn-outline-dark" href="../pdf/HHW_resume2019.pdf" target="_blank">Resume</a>
                        <a class="btn btn-outline-dark" href="../pdf/HHW_cv2019.pdf" target="_blank">Curriculum Vitae</a>
                        <br><br>
                        <p>You may also drop me an e-mail <a href="mailto:henryheng612@hotmail.com" id="email-link">(click here)</a> for further enquiries.</p>
                        <p><pre><code>henryheng612[at]hotmail[dot]com</code></pre></p>
                    </div>
                    <!-- /div#downloadables -->
                </div>
                <!-- /div#intro-text -->
            </div>
            <!-- /div#sec-intro -->
            <hr>

            <div class="col-xl-12 h-100 d-inline-block div-panel" id="sec-credentials">
                <h1>CREDENTIALS</h1>

                <h2>ACADEMIC QUALIFICATIONS</h2>
                <div class="card-columns">
                    <div class="card">
                            <img class="card-img-top" src="../images/sunway_square.jpg" alt="sunway">
                        <div class="card-body">
                            <h5 class="card-title">Sunway University, MY</h5>
                            <p class="card-text">MSc in Computer Science (By Research)</p>
                            <p class="card-text">01/2019 - Present</p>
                            <hr>
                            <p class="card-text">Thesis Title: Fog Computing Resource Management for Real-Time Traffic Planner System</p>
                            <p class="card-text">Supervisor: Dr Richard Teck Ken WONG  &nbsp; <a href="https://university.sunway.edu.my/profiles/sci-tech/Dr-Richard-Wong"><i class="fas fa-user fa-sm"></i></a> &nbsp; <a href="https://ricwtk.github.io/"><i class="fas fa-link fa-sm"></i></a> &nbsp; <a href="mailto:richardwtk@sunway.edu.my"><i class="fas fa-envelope fa-sm"></i></a></p>
                            <div class="collapse" id="collapse-masters">
                                <div class="collapse-content">
                                    <p>
                                        <span style="text-decoration: underline">Co-Supervisors</span>
                                        <br>Sunway University: Dr Lee Seng YEONG &nbsp; <a href="https://university.sunway.edu.my/profiles/sci-tech/dr-yeong-lee-seng"><i class="fas fa-user fa-sm"></i></a> &nbsp; <a href="mailto:leesengy@sunway.edu.my"><i class="fas fa-envelope fa-sm"></i></a>
                                        <br>Universiti Malaya: Assoc. Prof. Dr Nor Badrul Anuar &nbsp; <a href="https://umexpert.um.edu.my/badrul"><i class="fas fa-user fa-sm"></i></a> &nbsp; <a href="mailto:badrul@um.edu.my"><i class="fas fa-envelope fa-sm"></i></a>
                                    </p>
                                    <p>Dual-award programme with Lancaster University, UK</p>
                                </div>
                                <!-- /div.collapse-content -->
                            </div>
                            <!-- /div#collapse-masters -->
                            <hr>
                            <a data-toggle="collapse" href="#collapse-masters" role="button" aria-expanded="false" aria-controls="collapse-masters" onclick="javascript:chevron_presto('chevron-masters');"><i class="fas fa-chevron-down" id="chevron-masters" aria-hidden="true"></i></a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->

                    <div class="card">
                        <img class="card-img-top" src="../images/taylors_square.png" alt="taylors">
                        <div class="card-body">
                            <h5 class="card-title">Taylor's University, MY</h5>
                            <p class="card-text">Bachelor of Computer Science (Hons)</p>
                            <p class="card-text">08/2015 - 07/2018</p>
                            <hr>
                            <p class="card-text">
                                Graduated with 1st Class Honors
                                <br>Final CGPA: 3.80 / 4.00
                            </p>
                            <div class="collapse" id="collapse-degree">
                                <div class="collapse-content">
                                    <p>
                                        <span style="text-decoration: underline">Final Year Project</span>
                                        <br>International Procurement Online Matching System (IPOMS)
                                        <br>Academic Supervisor: Ms Norhidayah HAMZAH &nbsp; <a href="https://expert.taylors.edu.my/cv/norhidayah.hamzah"><i class="fas fa-user fa-sm"></i></a> &nbsp; <a href="mailto:norhidayah.hamzah@taylors.edu.my"><i class="fas fa-envelope fa-sm"></i></a> &nbsp; <a href="linkedin.com/in/norhidayah-hamzah-b03636132"><i class="fab fa-linkedin-in fa-md"></i></a>
                                    </p>
                                    <p>Recipient of Taylor's Tertiary Merit Scholarship</p>
                                    <p>Obtained Dean's List award for all long academic semesters</p>
                                    <p>Dual-award programme with UWE Bristol, UK</p>
                                </div>
                                <!-- /div.collapse-content -->
                            </div>
                            <!-- /div#collapse-degree -->
                            <hr>
                            <a data-toggle="collapse" href="#collapse-degree" role="button" aria-expanded="false" aria-controls="collapse-degree" onclick="javascript:chevron_presto('chevron-degree');"><i class="fas fa-chevron-down" id="chevron-degree" aria-hidden="true"></i></a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->

                    <div class="card">
                        <img class="card-img-top" src="../images/taylors_square.png" alt="taylors">
                        <div class="card-body">
                            <h5 class="card-title">Taylor's University, MY</h5>
                            <p class="card-text">Foundation in Computing</p>
                            <p class="card-text">08/2014 - 06/2015</p>
                            <hr>
                            <p class="card-text">
                                Completed with Distinction Award
                                <br>Final CGPA: 3.63 / 4.00
                            </p>
                            <div class="collapse" id="collapse-foundation">
                                <div class="collapse-content">
                                    <h4>SEMESTER 1</h4>
                                    <ul>
                                        <li>Practical IT Skills</li>
                                        <li>Introduction to Information Systems</li>
                                        <li>Social Media</li>
                                        <li>English I</li>
                                        <li>Introduction to Computing</li>
                                        <li>Mathematics I</li>
                                    </ul>
                                    <!-- /ul -->
                                    
                                    <h4>SEMESTER 2</h4>
                                    <ul>
                                        <li>Introduction to Multimedia and Innovation</li>
                                        <li>Introduction to E-Business</li>
                                        <li>English II</li>
                                        <li>Introduction to Algorithm and Problem-Solving</li>
                                        <li>.NET Technology</li>
                                        <li>Mathematics II</li>
                                    </ul>
                                    <!-- /ul -->
                                </div>
                                <!-- /div.collapse-content -->
                            </div>
                            <!-- /div#collapse-foundation -->
                            <hr>
                            <a data-toggle="collapse" href="#collapse-foundation" role="button" aria-expanded="false" aria-controls="collapse-foundation" onclick="javascript:chevron_presto('chevron-foundation');"><i class="fas fa-chevron-down" id="chevron-foundation" aria-hidden="true"></i></a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->

                    <div class="card">
                        <img class="card-img-top" src="../images/wms.png" alt="wmsk">
                        <div class="card-body">
                            <h5 class="card-title">Wesley Methodist School Klang, MY</h5>
                            <p class="card-text">Sijil Pelajaran Malaysia (SPM)</p>
                            <p class="card-text">01/2009 - 11/2013</p>
                            <hr>
                            <p class="card-text">
                                Obtained 7 distinction grades out of 11 subjects
                            </p>
                            <div class="collapse" id="collapse-spm">
                                <div class="collapse-content">
                                    <h4>COMPULSORY SUBJECTS</h4>
                                    <ul>
                                        <li>Bahasa Malaysia (Malay Language)</li>
                                        <li>English</li>
                                        <li>Pendidikan Moral (Moral Education)</li>
                                        <li>Sejarah (History)</li>
                                        <li>Mathematics</li>
                                    </ul>
                                    <!-- /ul -->
                                
                                    <h4>SCIENCE STREAM SUBJECTS</h4>
                                    <ul>
                                        <li>Additional Mathematics</li>
                                        <li>Physics</li>
                                        <li>Chemistry</li>
                                        <li>Biology</li>
                                    </ul>
                                    <!-- /ul -->
                                
                                    <h4>ELECTIVE SUBJECTS</h4>
                                    <ul>
                                        <li>Principles of Accounting</li>
                                        <li>Bible Knowledge</li>
                                    </ul>
                                    <!-- /ul -->
                                </div>
                                <!-- /div.collapse-content -->
                            </div>
                            <!-- /div#collapse-spm -->
                            <hr>
                            <a data-toggle="collapse" href="#collapse-spm" role="button" aria-expanded="false" aria-controls="collapse-spm" onclick="javascript:chevron_presto('chevron-spm');"><i class="fas fa-chevron-down" id="chevron-spm" aria-hidden="true"></i></a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->
                </div>
                <!-- /div.card-columns -->

                <div class="col-xl-12 h-100 d-inline-block card" id="coursework">
                    <div class="card-header">
                        <h5>Coursework</h5>
                    </div>
                    <!-- /div.card-header -->

                    <div class="collapse" id="collapse-coursework">
                        <div class="collapse-content">
                            <div class="card-columns" style="width: 100%;">
                                <?php
                                    $getSynopsis = mysqli_query(connectDb(), "CALL `get_modules`;");
                                    if($getSynopsis) {
                                        if(mysqli_num_rows($getSynopsis) > 0) {
                                            while($row = mysqli_fetch_assoc($getSynopsis)) {
                                                echo '<div class="card card-course" style="width: 90%;">';
                                                echo '<a class="course-click" data-toggle="collapse" href="#collapse-' . $row['module_id'] . '" role="button" aria-expanded="false" aria-controls="collsapse-' . $row['module_id'] . '" onclick="javascript:chevron_presto(\'chevron-' . $row['module_id'] . '\');">';
                                                echo    '<h4>' . $row['module_id'] . '</h4>';
                                                echo    '<h5>' . $row['module_name'] . '</h5>';
                                                echo    '<div class="collapse" id="collapse-' . $row['module_id'] . '">';
                                                echo        '<div class="collapse-content">' . $row['synopsis'] . '</div>';
                                                echo    '</div>';
                                                echo    '<div class="chevron">';
                                                echo        '<i class="fas fa-chevron-down" id="chevron-' . $row['module_id'] . '" aria-hidden="true"></i>';
                                                echo    '</div>';
                                                echo '</a>';
                                                echo '</div>';
                                            }
                                        }
                                    } else {
                                        echo "<p>Unable to retrieve coursework.</p>";
                                    }
                                ?>
                            </div>
                            <!-- /div.card-columns -->
                        </div>
                        <!-- /div.collapse-content -->
                    </div>
                    <!-- /div#collapse-coursework -->
                    <a data-toggle="collapse" href="#collapse-coursework" role="button" aria-expanded="false" aria-controls="collapse-coursework" onclick="javascript:chevron_presto('chevron-coursework');">
                        <div style="padding: 20px 0;">
                            <i class="fas fa-chevron-down" id="chevron-coursework" aria-hidden="true"></i>
                        </div>
                        <!-- /div -->
                    </a>
                    <!-- /a -->
                </div>
                <!-- /div#coursework -->
            </div>
            <!-- /div#sec-credentials -->
            <hr>

            <div class="col-xl-12 h-100 d-inline-block div-panel" id="sec-experience">
                <h1>EXPERIENCE</h1>

                <div class="card-columns">
                    <div class="card">
                        <img class="card-img-top" src="../images/smita_square.png" alt="smita">
                        <div class="card-body">
                            <h5 class="card-title">SME International Trade Association of Malaysia (SMITA)</h5>
                            <p class="card-text">Intern</p>
                            <p class="card-text">01/2018 - 03/2018</p>
                            <a class="btn btn-outline-dark" data-toggle="collapse" href="#collapse-smita" role="button" aria-expanded="false" aria-controls="collapse-smita">More Info</a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->

                    <div class="card">
                            <img class="card-img-top" src="../images/taylors_square.png" alt="taylors">
                        <div class="card-body">
                            <h5 class="card-title">Taylor's University Student Success Center (SSC)</h5>
                            <p class="card-text">PALS Leader</p>
                            <p class="card-text">01/2015 - 06/2018</p>
                            <a class="btn btn-outline-dark" data-toggle="collapse" href="#collapse-pals" role="button" aria-expanded="false" aria-controls="collapse-pals">More Info</a>
                        </div>
                        <!-- /div.card-body -->
                    </div>
                    <!-- /div.card -->
                </div>
                <!-- /div.card-columns -->

                <div class="col-xl-12 d-inline-block">
                    <div class="collapse" id="collapse-smita">
                        <div class="collapse-content">
                            <hr>
                            <h3>Intern at SME International Trade Association of Malaysia (SMITA)</h3>
                            <p>Employed as an intern for a special project</p>
                            <p>Helped to create videos showcasing company profile and recent projects</p>
                        </div>
                        <!-- /div.collapse-content -->
                    </div>
                    <!-- /div#collapse-smita -->
                </div>
                <!-- /div.col-xl-12 d-inline-block -->

                <div class="col-xl-12 d-inline-block">
                    <div class="collapse" id="collapse-pals">
                        <div class="collapse-content">
                            <hr>
                            <h3>PALS Leader @ Taylor's University</h3>
                            <p>Provided guidance for junior students from Taylor's School of Computing & IT (SoCIT) and School of Biosciences (SBS) struggling with various modules.</p>
                            <br>
                            <div class="col-xl-6 order-left">
                                <h3>Foundation in Computing</h3>
                                <ul>
                                    <li>Mathematics I (01/2015 - 06/2015)</li>
                                    <li>Axlebra & Calculus (08/2015 - 12/2015, 01/2016 - 05/2016)</li>
                                    <li>Discrete Mathematics (02/2016 - 05/2016)</li>
                                    <li>Introduction to Computing Mathematics (08/2017 - 11/2017, 03/2018 - 05/2018)</li>
                                    <li>Mathematics (09/2017 - 11/2017, 04/2018 - 06/2018)</li>
                                </ul>
                                <!-- /ul -->
                                <br>
                                <h3>Foundation in Science</h3>
                                <ul>
                                    <li>Mathematics (09/2017 - 11/2017, 04/2018 - 06/2018)</li>
                                </ul>
                                <!-- /ul -->
                                <br>
                            </div>
                            <!-- /div.col-xl-6 order-left -->

                            <div class="col-xl-6 order-left">
                                <h3>Diploma in Information Technology</h3>
                                <ul>
                                    <li>Computing Mathematics (08/2016 - 10/2016, 04/2017 - 05/2017)</li>
                                    <li>Object-Oriented Programming (04/2017 - 05/2017)</li>
                                </ul>
                                <!-- /ul -->
                                <br>
                                <h3>Undergraduate Programmes @ SoCIT</h3>
                                <ul>
                                    <li>Mathematics for Computing I (04/2016 - 07/2016, 09/2016 - 12/2016)</li>
                                    <li>C Programming (1-1 Sessions) (10/2016 - 12/2016)</li>
                                    <li>Computing Mathematics (04/2017 - 06/2017, 09/2017 - 11/2017)</li>
                                </ul>
                                <!-- /ul -->
                            </div>
                            <!-- /div.col-xl-6 order-left -->
                        </div>
                        <!-- /div.collapse-content -->
                    </div>
                    <!-- /div#collapse-pals -->
                </div>
                <!-- /div.col-xl-12 d-inline-block -->
            </div>
            <!-- /div#sec-experience -->
            <hr>

            <div class="col-xl-12 h-100 d-inline-block div-panel" id="sec-testimonials">
                <h1>TESTIMONIALS</h1>
                <p style="text-align: center;">Not available at the moment, come back soon!</p>
            </div>
            <!-- /div#sec-testimonials -->
        </div>
        <!-- /div.container-fluid -->

        <footer>
			<p>@<span id="year"></span> Henry Heng</p>
			<a href="https://twitter.com/HenryHHW" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>&nbsp;
			<a href="https://www.instagram.com/deezombiedude/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>&nbsp;
			<a href="https://www.facebook.com/deezombiedude612" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></a>&nbsp;
			<a href="https://www.linkedin.com/in/henryheng612/" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a>&nbsp;
			<a href="https://www.github.com/deezombiedude612" target="_blank"><i class="fab fa-github fa-lg"></i></a>&nbsp;
			<a href="https://www.youtube.com/user/deezombiedude612/" target="_blank"><i class="fab fa-youtube fa-lg"></i></a>
		</footer>
		<!-- /footer -->

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>

        <!-- External JS -->
        <script src="../js/about.js"></script>
        <script src="../js/constant.js"></script>
    </body>
</html>
