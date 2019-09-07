/* JS Document: About Me Page */

/* receives module code, returns module name and synopsis for display */
function showSynopsis(moduleCode) {
	let moduleName = "";
	let moduleSynopsis = "";

	switch (moduleCode) {
		case "ITS60103":
			moduleName = "System Analysis and Design";
			moduleSynopsis =
				"The course provides basic understanding and practical skills of system analysis and design. "
				+ "It will help students to work in information systems related field in the future.";
			break;

		case "ITS60304":
			moduleName = "C Programming";
			moduleSynopsis =
				"This module introduces the basics of structured programming, functions, arrays, pointers, data structures and dynamic memory allocation. "
				+ "Topics covered include Introduction to Program Development Environment, Control Structures, Functions, Arrays, Pointers, File Processing, Data Structures and Dynamic Memory Management.";
			break;

		case "ITS60404":
			moduleName = "Computer Systems";
			moduleSynopsis =
				"This course introduces the fundamentals of computer systems. "
				// + "Topics covered include data representation, data conversion, logic circuits and digital arithmetic.";
				+ "Topics covered include number systems, conversion techniques, Boolean algebra, basic operation of logic gates, simplification of Boolean algebra, K-map, RISC and CISC, instruction sets, combinational circuits, memory hierarchy, memory addressing, counters and registers.";
			break;

		case "MTH60104":
			moduleName = "Mathematics for Computing I";
			moduleSynopsis =
				"This module introduces students to the discrete mathematical skills required in the field of computing and information technology. "
				+ "Students will be able to understand thoroughly the concepts of logic, proof techniques, set theory, number theory, counting principles and graph theory that they will encounter in other computing related subjects.";
			break;

		case "COM60303":
			moduleName = "Communication Practice for IT Professionals";
			moduleSynopsis =
				"This practice-based course is designed to provide students with knowledge and a practical understanding of the concepts and theories of information and communication. "
				+ "The course aims to equip students working with information systems with information literacy and communication skills essential for their academic work and for their future professional roles in the IT industry. "
				+ "Lectures provide the theoretical basis and instruction while tutorials, practical sessions and group project work provide training in written and oral communication as well as a realistic experience of working in teams. "
				+ "The knowledge and training gained in this course will help develop key skills necessary for life-long learning.";
			break;

		case "CSC60103":
			moduleName = "Online Presence Management";
			moduleSynopsis =
				"This module includes hands-on coverage of Google cloud tools and services in building an online presence for businesses. "
				+ "The coverage would include opportunities for students to explore and build online applications that can enhance business productivity, create online presence, understand and engage customers with social media and analyze their online presence using different Google web tool technologies.";
			// "This module provides students with the state of the art training in using cloud computing technologies and applications. " 
			// + "It also provides hands-on project opportunities for students to build online applications that can enhance business productivity, create online presence, understanding and engaging customers with social media and analyzing online presence using different web tool technologies.";
			break;

		case "ITS60704":
			moduleName = "Fundamentals of Software Engineering";
			moduleSynopsis =
				"This course is about understanding what needs to be known before software is built, how to obtain that information, how to analyse and understand and subsequently design it. "
				+ "It also looks at the process and management software engineers should incorporate to discover and create this information.";
			break;

		case "ITS61104":
			moduleName = "Web Systems and Technologies";
			moduleSynopsis =
				"This subject introduces the student to the basics of web technology concepts, the principles and tools that can be used to develop web applications. "
				+ "Topics would include internet protocols, HTML and XML files, client processing with Javascript and server side processing with PHP.";
			break;

		case "ITS60203":
			moduleName = "Fundamentals of Data Communications";
			moduleSynopsis =
				"This subject provides a broad introduction to the fundamentals of data communications and network technology. "
				+ "Emphasis is on higher aspects of data communications from perspective of the computer scientist and information technologist in the communication of data, and the interaction of remote systems. "
				+ "Topics include TCP/IP Model and supported protocols, transmission mediums, multiplexing techniques, error detection and correcting techniques, flow control and error control techniques, switching technology, routing, IP addressing, network mobility, and internetworking components.";
			break;

		case "ITS60504":
			moduleName = "Data Structures and Algorithms";
			moduleSynopsis =
				"This course introduces students to algorithm analysis and discusses the working of various data structures in detail. "
				+ "Topics covered include Principles of Algorithms Analysis, Linked Lists, Stacks and Queues, Trees and Recursion, Hashing, Sorting Methods, Binary Search Trees and Graph Theory.";
			break;

		case "ITS60603":
			moduleName = "Software Design";
			moduleSynopsis =
				"The subject advances the student’s knowledge and understanding of the fundamentals of software engineering; focusing on the software design phase/stage. "
				+ "Students learn and gain practical skills in software design architectures like the role of decomposition, components/subsystems, interfaces, separation of concerns, layers, architectural styles and patterns. "
				+ "Students also are taught advanced software design principle of design patterns; patterns definition, history of patterns, pattern languages, pattern communities, designing patterns both from general usage (i.e. model view controller, iterator and wrapper). "
				+ "Students in the end are expected to implement their knowledge using CASE tools and Java programming.";
			break;

		case "ITS60604":
			moduleName = "Fundamentals of Database Systems";
			moduleSynopsis =
				"This course is an introduction to the principles, use, and applications of database systems. "
				+ "Students who complete the course will be able to design and create databases, be able to extract information from databases, understand in broad terms how database systems work, and understand the purposes for which databases are used.";
			break;

		case "ITS60804":
			moduleName = "Introduction to Object-Oriented Programming";
			moduleSynopsis =
				"This course introduces the fundamentals of Object-Oriented Programming using Java. "
				+ "Topics covered include Object-Oriented programming concepts, classes, inheritance, polymorphism, abstract classes, interfaces, and exception handling.";
			break;

		case "ITS60303":
			moduleName = "User Interface Programming and Graphics";
			moduleSynopsis =
				"This course teaches students the programming techniques and skills to enable them to develop effective user interfaces for their programs, by covering topics of graphical components and layouts, events handling, and user interface design patterns. "
				+ "The course also introduces the basic concepts of 2D and 3D graphics, with focus on geometry and representation of vector graphics, transformations, rendering, and other related topics. "
				+ "The frameworks to be used are Java Swing.";
			// "Computer graphics has become such a large and important field. " 
			// + "The implementation of graphical human-computer interfaces is an issue both in HCI and in graphics. " 
			// + "The course also covers linear algebra and 2D geometry relevant to computer graphics and is intended to parallel and supplement the more theoretical development presented in the first year mathematics course.";
			break;

		case "ITS60403":
			moduleName = "Computing Theory";
			moduleSynopsis =
				"This subject aims to introduce students to foundational issues in computer science. "
				+ "This includes the study of measuring how long computations may take, probabilistic approaches to difficult problems, the principles of cryptography, the use of grammars to specify syntax rules, formal models of computation, and computability properties. "
				+ "The emphasis is on understanding and application of techniques, rather than formal mathematical proofs. "
				+ "Topic include Formal Languages, Automata theory, Computability Theory, and Complexity Theory.";
			break;

		case "ITS60503":
			moduleName = "Operating Systems";
			moduleSynopsis =
				// "This subject aims to introduce fundamental principles, strategies and algorithms used in operating systems.";
				"This course covers main operating system architectures that are available and used in the industry. "
				+ "It also covers various algorithms and techniques used for scheduling processes and how to detect and prevent deadlocks. "
				+ "Students also learn about memory management and various algorithms used to manage virtual memory. "
				+ "In addition to that, topics on disk access and various device I/O are also discussed.";
			break;

		case "ITS61604":
			moduleName = "Distributed Application Development";
			moduleSynopsis =
				"The purpose of this module is for the students to understand, analyze, design, and develop distributed applications by using various network programming techniques. "
				+ "This module enables students to implement heterogeneous network protocols for developing distributed applications in order to perform various tasks such as chatting, data communication, client/server, and peer-to-peer interaction. "
				+ "<br><br>This module covers the study of distributed applications. "
				+ "It mainly focuses on the analysis and development of diverse distributed applications by implementing various techniques such as Network IO Streams, Object Serialization, Multi-threading, Thread Pools, TCP, UDP, and RMI. "
				+ "Students are also introduced to the implementation of cloud computing platforms and applications.";
			break;

		case "ITS61804":
			moduleName = "Object-Oriented Programming using C++";
			moduleSynopsis =
				"This course strengthens students' understanding of object-oriented programming concept and introduces them to OO concepts supported in C++. "
				+ "Topics covered include inheritance, polymorphism, generic programming, Standard Template Library, and design patterns.";
			break;

		case "CSC60303":
			moduleName = "Professional Computing Practice";
			moduleSynopsis =
				// "This subject is an introduction to professional computing practices. " 
				// + "It is intended for computer science and IT students who have not studied business principles, or who have little work experience in the industry. " 
				// + "The subject provides a survival kit for computer science and IT graduates entering the work force. " 
				// + "The subject considers computer ethical issues, such as information privacy, computer crime, computer misuse. " 
				// + "The subject considers the international legal framework available to protect software system development. " 
				// + "This includes non-disclosure agreements, employment contracts, intellectual property law (copyright, patent, licensing, royalties), trademarks and warranty disclaimers. " 
				// + "The subject also considers the how ethics and law affect software system development.";
				"This subject covers the ethical and legal perspective of what is required in a computing profession as well as how they affect the development of software systems used in organizations. "
				+ "This includes coverage on issues such as ethical philosophies, information privacy, computer crime, computer misuse and considerations on the international and local legal framework available to protect software systems development which would cover aspects of contracts, non-disclosure agreements, intellectual property law (copyright, patent, licensing, royalties, trade-secrets, trademarks and warranty disclaimers).";
			break;

		case "CSC60403":
			moduleName = "Technopreneurship";
			moduleSynopsis =
				"This module provides students with the necessary skills to start and operate a technology-related business. "
				+ "The fundamental concepts of starting and operating business, development of a business plan, obtaining financing, and marketing the products or services are taught.";
			// "This course introduces students to the technopreneurship IT Professionals, its process, the kind of mind-set is required, starting a new business with a proper plan, financing the venture and finally managing & growing the venture.";
			break;

		case "ITS61004":
			moduleName = "Object-Oriented Programming using Java";
			moduleSynopsis =
				"This course introduces the advanced object-oriented programming concepts in Java. "
				+ "Topics covered include exception handling, IO Streams, Event Handling, GUI Programming, Generics, and Collection.";
			break;

		case "ITS61403":
			moduleName = "Artificial Intelligence";
			moduleSynopsis = "This course introduces several topics and techniques related to Artificial Intelligence, including: blind and heuristic search strategies, game playing search algorithms, knowledge representation and reasoning in propositional logic and predicate calculus, planning, intelligent agents, genetic algorithms, probability and Bayesian networks, machine learning techniques such as decision trees and neural networks.";
			break;

		case "ITS62204":
			moduleName = "Mobile Applications Development";
			moduleSynopsis =
				"This module covers the core concepts of mobile applications development. "
				+ "It mainly focuses on analysis, development and deployment of diverse mobile applications using Android Studio.";
			break;

		case "ITS61203":
			moduleName = "Cryptography";
			moduleSynopsis =
				"This module covers essentially the three types of cryptographic schemes typically used to accomplish the above purpose namely; symmetric key cryptography, asymmetric key cryptography, hash functions and digital signatures. "
				+ "This includes the mathematical background behind cryptography, and a brief on key distribution management and authentication in data communications.";
			break;

		case "ITS61504":
			moduleName = "Data Mining";
			moduleSynopsis =
				// "This course is designed to introduce the complexity of data mining, algorithms used in data mining and the various applications of data mining. " 
				// + "Topics included are supervised and unsupervised learning techniques, text mining, classification techniques, neural networks and Naïve Bayes approach.";
				"This module introduces the knowledge and practical exercise of step-by-step data mining activities involved in various data mining techniques, including clustering, classification, association rule mining, sequential rule mining, anomaly detection and regression analysis, using different types of data.";
			break;

		case "ITS61704":
			moduleName = "Windows Applications using .NET Technologies";
			moduleSynopsis =
				"This course introduces the .NET Framework using C#. "
				+ "Topics covered include the .NET framework, C# constructs, classes, inheritance, polymorphism, interfaces, exception handling, collections, generics, delegates, indexers, specific C# features, and .NET assemblies.";
			break;

		case "ITS62004":
			moduleName = "Advanced Database Systems";
			moduleSynopsis =
				"The subject aims to broaden knowledge of the implementation of database systems and to introduce emerging database technologies, including information retrieval, and spatial databases. "
				+ "File structures and indexing are discussed, and analytical details presented, that enable students to understand efficiency in query evaluation. "
				+ "The idea of the transaction is introduced along with the necessity of concurrency control and serialisability. "
				+ "Issues of backup and recovery for databases are discussed.";
			break;

		case "PRJ60207":
			moduleName = "Final Year Project";
			moduleSynopsis =
				"This module provides the opportunity to show that one can develop an idea for a piece of software, through the stages of research, analysis and design into an implemented product. "
				+ "Working over a period of about two semesters, students will have an individual supervisor who will provide assistance and guidance. "
				+ "Students typically produce a significant piece of software, substantial written report and attend a viva to demonstrate and articulate his/her findings and progress.";
			break;

		case "IND60206":
			moduleName = "Industrial Training";
			moduleSynopsis =
				"As part of the school integrated curriculum, it is compulsory for all students to undergo a full-time industrial training module after successfully completing 85% of the core/specialization modules for a minimum period of three months. "
				+ "Placement of students at various companies will be supervised academic supervisor and coordinated by the Industrial Training Coordinator. "
				+ "The students will be placed at various companies throughout Malaysia and also other countries, specializing in software development. "
				+ "<br><br>The training at the various companies will expose the students to a real working environment especially the companies' organization structures, business operations and administrative functions. "
				+ "The hands-on experience in the training will reinforce what has been taught in the classroom, and what has been experienced in the lab sessions.";
			break;

		case "MPU3123":
			moduleName = "Tamadun Islam & Tamadun Asia (TITAS) (Islamic and Asian Civilizations)";
			moduleSynopsis =
				"Kursus ini membincangkan ilmu ketamadunan yang mencakupi pengenalan ilmu ketamadunan dan interaksi kepelbagaian tamadun masyarakat Malaysia. "
				+ "Selain itu, proses pembangunan di Malaysia serta isu-isu kontemporari dalam tamadun Islam dan Asia turut dikaji. "
				+ "Akhir sekali, modul ini bertujuan bagi melahirkan pelajar yang mempunyai sikap hormat-menghormati, mengamalkan nilai-nilai murni dan mempunyai jati diri sebagai warganegara Malaysia.";
			break;

		case "MPU3113":
			moduleName = "Hubungan Etnik (Ethnic Relations)";
			moduleSynopsis =
				"Ethnic Relations module focuses on the study of the basic concepts of ethics relations. "
				+ "It examines the development of ethnic relations in Malaysia with the aim of creating a society according to Malaysian culture and inter-regions relations as well as taking into account the global challenges in ethnic relations. "
				+ "This course also attempts to increase the students’ understanding on the concepts of social cohesion as well as basic concepts of ethnic relations, plurality and pluralistic society. "
				+ "Students would also be exposed to the concepts in political, economic and constitutional development in the context of ethnic relations in Malaysia.";
			break;

		case "UCM60503U2":
			moduleName = "Personal Development";
			moduleSynopsis =
				"This module presents undergraduate degree students with an introduction to the importance of personal development to help them leverage on their unique strengths to create a personal mission statement and strategic plan for their academic and career success. "
				+ "Students are made aware of the Taylor's Graduate Capabilities, understand what 21st century employers are looking for in graduates and reflect on their existing skills and competencies. "
				+ "This personal development process encourages students to become self-reliant and independent learners who are confident of their abilities, skills and strengths; self-aware about their growth areas and developmental goals as well as to become self-motivated to fulfil their personal and career aspirations. "
				+ "This whole journey is undertaken in the context and perspective of self in relation to the community.";
			break;

		case "UCM60302U3":
			moduleName = "Malaysian Indigenous Cultures";
			moduleSynopsis =
				"This course will equip students with some basic knowledge of cultural anthropology. "
				+ "This basic knowledge will in turn help them gain an understanding of indigenous peoples of Malaysia; their way of life and culture. "
				+ "This course aims to nurture respect and appreciation for different others, especially minority groups not often in contact with.";
			break;

		case "UCM60102U4":
			moduleName = "Community Service Initiative";
			moduleSynopsis =
				"This module is designed to help foster a sense of care and concern among students for their community, environment and the world at large. "
				+ "This module will help develop students' personal and social responsibility. "
				+ "Students learn through participating in a service experience and will have the opportunity to use their skills and knowledge in real-life situations.";
			break;

		default:
			moduleName = "";
			moduleSynopsis = "Oops.. something went wrong!";
	}

	document.getElementById('module-name').innerHTML = moduleName;
	document.getElementById('module-synopsis').innerHTML = moduleSynopsis;
}

/* receives clicked button ID and toggles chevron-up/down */
function chevron_presto(chevron_id) {
	document.getElementById(chevron_id).classList.toggle('fa-chevron-up');
	document.getElementById(chevron_id).classList.toggle('fa-chevron-down');
}