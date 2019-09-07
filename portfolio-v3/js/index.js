/* JavaScript Document for ./index.html */

const nonsense = [
    "Welcome to the third iteration of my website!", /* try not to have messages longer than this one. */

    "Lorem ipsum your ass. This isn't in beta!",
    "Ciphers are the best messages one can send.",
    "Like my simplistic landing page?",
    "Howdy, I'm Henry. But you can call me Henry.",
    "This page should look good on mobile at least.",
    "0321343",
    "18107508",
    "Incoherent thoughts keep flooding me brainz.",
    "...",
    "JS file v1.1 up and running",
    "..then, everything changed when the dark attacked.."
];
let quote = nonsense[Math.floor(Math.random() * nonsense.length)];
document.getElementById('presto-chango').innerHTML = quote;

setInterval(function () {
    var quote = nonsense[Math.floor(Math.random() * nonsense.length)];
    document.getElementById('presto-chango').innerHTML = quote;
}, 2500);

let dave, jason_count, sukhbir = 0;

/* elusive sub-par master mode */
function out() {
    const monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let input = document.getElementById("load").value.toLowerCase();
    let output = "";
    let today = "";

    switch (input) {
        /* ----- TU/UWE CLASSMATES ----- */
        case "0321343": output = "Nice number right?"; break;

        case "0311385": output = "Stanlee Sim Leiber"; break;                                                           // STANLEY SIM
        case "0311783": output = "Color changing only doesn't count, aite!?"; break;                                    // LIM YU HENG
        case "0313696": output = "I like him. He reminds me about me actually."; break;                                 // HAO QIN
        case "0313836": output = "DO NOT ANGER THE JOHN!"; break;                                                       // JOHN HO
        case "0313936": output = "He only didn't have a semester together with my batch's gang in 082017."; break;      // NG JIA SHIN
        case "0314193": output = "I hope you're doing fine."; break;                                                    // FREDERICK CHOO
        case "0315264": output = "He doesn't mingle around that much, even with the senior batch."; break;              // PRASONG PUNYAWAN
        case "0315302": output = "He's probably the more hardworking one than I am."; break;                            // WONG TIN WOOI
        case "0315649": output = "Between you and Darshan, thanks for opening up first."; break;                        // OOI YING CHIING
        case "0315747": output = "He knows me, he knows my cousin.. next thing will proly be me teddy."; break;         // IAN GAN
        case "0316175": output = "Have you got a large wardrobe at home?"; break;                                       // DARSHAN RAVICHANDRAN
        case "0316253": output = "Quick wits. Correct me if I'm wrong."; break;                                         // IFANDI SALIM
        case "0316270": output = "One of those I know in class who's quick to getting Apple stuff."; break;             // EDMOND TAN
        case "0316275": output = "I still can't add you on Facebook."; break;                                           // VIMALNATH NAMBIAR
        case "0316421": output = "He's nice. Didn't talk a lot to him tho."; break;                                     // LIM MING JOON
        case "0316698": output = "You know a little more about cars than an average software engineer."; break;         // CHAN WAI HOE
        case "0316703": output = "Mimi, Prishtee and I still talk about you sometimes."; break;                         // ANCHALI RENGANATHEN
        case "0316902": output = "I predicted I'd see him again after his first sem. I was right, kinda. Twice?"; break;// AHMED YOUSEF
        case "0317818": output = "I'm pretty sure your priorities weren't set right back then."; break;                 // SYED ARSHAN
        case "0317824": output = "Has he graduated yet?"; break;                                                        // ADEEL USMAN
        case "0317887": output = "Traquer"; break;                                                                      // TING SHI JIN
        case "0317911": output = "Deer Pudding"; break;                                                                 // DHEERSHREYHAN PUDDOO
        case "0318109": output = "I think he has a start-up recently."; break;                                          // JULIUS HO
        case "0318222": output = "Markuses"; break;                                                                     // MARCUS LOKE
        case "0318225": output = "Mason.. buddy. Need a hug with that?"; break;                                         // LEWIS LIEW
        case "0318365": output = "Where art Sheng? 'You know you want her.'"; break;                                    // LIEW WANN SHENG
        case "0318686": output = "His scar on his foot still scares the heck out of me just by thinking."; break;       // ALVIN LIOW
        case "0318691": output = "Press 'X' for Jason"; break;                                                          // JASON TEH
        case "0318770": output = "Ermm.. hi. Sorry I didn't add you in the Crypto Whatsapp group at first."; break;     // MOHAMED AKRAM IBRAHIM
        case "0318941": output = "Most of your horizontal-like handwriting strokes are right to left right?"; break;    // KAVINTHERAN KUMAR
        case "0319137": output = "Day by day after seeing your photos your body would make a great T shape."; break;    // TAN DE REN
        case "0319138": output = "The last I remember about him from convo is him looking like a bellhop."; break;      // ABDULLAH HARITH
        case "0319226": output = "We talked a bit.. if only I knew what. My mind kong liao!"; break;                    // KONG SHIEN NIE
        case "0319297": output = "The only righty out of the five."; break;                                             // KEVIN YEAP
        case "0319493": output = "Her art's good. You should go check her out."; break;                                 // STELLA PHUA
        case "0319504": output = "I think after all this, you'll be the last of us to graduate."; break;                // LIYAU YU HAO
        case "0319601": output = "I'll be honest, I can still read your handwriting."; break;                           // ALEX HO
        case "0319639": output = "I'm sure your height stature ain't that bad."; break;                                 // JANE WEE
        case "0319663": output = "Honestly I was surprised he hadn't graduated yet after my third semester."; break;    // RUSHAB UPADHYAYA
        case "0319723": output = "She may have got a group of friends in many batches now."; break;                     // NURAFIQAH HASNUL JAFRI
        case "0319736": output = "Out of everyone in his gang, he's the one I talked to the most after Alvin."; break;  // TAN KAE PHERNG
        case "0319826": output = "He's probably the most fluent out of the five."; break;                               // JUSTIN LING
        case "0319848": output = "She seems to hate the lecturer I really like. Idk, I digress."; break;                // BALREEN KAUR
        case "0319888": output = "Timonopod. The only one from Foundation I never teamed up with."; break;              // TIMOTHY DANIEL LIM
        case "0319937": output = "I'm pretty sure you're living under the radar for now."; break;                       // DEEPAK SINGH
        case "0320015": output = "Alas, his oust was sprinkled with facepalms."; break;                                 // LIEW JENN YAO
        case "0320261": output = "I lost count how many times her name got roasted by lecturers. Hint: X"; break;       // XUE QI
        case "0320339": output = "Eloquence is a gift, not a way out of trouble."; break;                               // DANISH NOORANI
        case "0320381": output = "Um.. care to explain how your hair works again?"; break;                              // MWALE NTAMBO
        case "0320395": output = "The gods of re-sits smile upon him every single semester."; break;                    // VINCENT FOO
        case "0320448": output = "Putang ina mo!"; break;                                                               // JAKE LEONG
        case "0320534": output = "An emcee for rent. He'll interest you with his cards. :)"; break;                     // DUNCAN TSEN
        case "0320811": output = "There were two classes when a junior's name is pronounced similarly."; break;         // JONATHAN FUNG
        case "0320818": output = "The beard, bro. Super thicc."; break;                                                 // SHAHER YAR GHOURI
        case "0320868": output = "If only they knew why people can't stop not seeing him."; break;                      // AMIRUL ADAM
        case "0320883": output = "Liang-zai!"; break;                                                                   // LEE WEI LIANG
        case "0320933": output = "What's a double rainbow again? I digress."; break;                                    // ONG ANDRE
        case "0320951": output = "Vi-sion has it that she's got an unstoppable 4.00."; break;                           // TAN VI LYNN
        case "0320957": output = "Mrs Lum"; break;                                                                      // OH LEAN LYNN
        case "0320981": output = "Stitch doesn't know what happened to the dead body."; break;                          // ALDRICH
        case "0321045": output = "Future Mr (and Mrs)"; break;                                                          // LUM CHUN LAM
        case "0321095": output = "Very vocal. Screw it, he finished the last sem first out of everyone else!"; break;   // TEOH JOO FONG
        case "0321150": output = "He.. slow."; break;                                                                   // KABIRDEV SINGH
        case "0321227": output = "I can safely say you're better in video ideas than me now."; break;                   // ANDREW NG
        case "0321255": output = "wylw"; break;                                                                         // WAYNE LOW
        case "0321268": output = "Do you not pronounce the 'J' as 'Y'?"; break;                                         // JOHANN WONG
        case "0321341": output = "MIA Adam's family member. We could've formed 0321341, 0321342 and 0321343!"; break;   // WAN AZIM
        case "0321342": output = "Ya peeping here now dahling?"; break;                                                 // SYAMIMI
        case "0321412": output = "At first I thought your e-mail was hot chocolate."; break;                            // HAZMAN HISHAM
        case "0321584": output = "This fella has no idea how weak his vocab is, or how strong his punch is."; break;    // TAN LIK MING
        case "0322087": output = "If Roy sees this, let's just rejoice again like in .NET again, alright?"; break;      // JORDAN WEE
        case "0322119": output = "Ooh gawd forbid. Have you smelt yourself? The first time I inhaled too much."; break; // MD MIZANUR RAHMAN
        case "0322849": output = "Makes Unity vids. I remember Dr Raja jokingly wanting to whack you one time."; break; // OMAR ABOBAKR OMAR BALFAQIH
        case "0323299": output = "Thanks for the MAD exam tips. They really helped."; break;                            // JONATHAN TAN YI GUAN
        case "0323308": output = "お母さん！"; break;                                                                    // NISA ANGELINA
        case "0323400": output = "Your first name reminds me of someone. It's that, minus the last A."; break;          // LAKSHANA BUNGHOO
        case "0323401": output = "Prishtee's best friend Courser"; break;                                               // KAWTHUR FAATIMAH BIBI CHOTOYE
        case "0323445": output = "You + Ruby.. since when?"; break;                                                     // BRANDON CHIN
        case "0323534": output = "Unlike typical fashion, he studied Forensics instead of opening a bank."; break;      // HO HONG LEONG
        case "0323724": output = "I remember trying to intervene when Jia Sheng was talking to you in broken BM."; break; // RAMZAN ASHRAF
        case "0323740": output = "Numbers used to scare him. Programming never did. It just never translated."; break;  // JOSEPH SAW
        case "0323791": output = "Yeah, I remember being confused for a bit with you looking Chinese and all."; break;  // SYUKRINA KAMILIA
        case "0323875": output = "They don't call you anything else other than the 2 nicknames right?"; break;          // HOESNI ABDUL AZIZ
        case "0324006": output = "I asked her why she was in my class one time. 1 year later she asked me the same thing."; break;    // YAP LI TENG
        case "0324339": output = "Only teamed up in Technopreneurship. He seems okay."; break;                          // STANSON YAN VEN HENG
        case "0324451": output = "Oh right. \"FLENCH!\" Dahling's super-pal. Merci-beacoup."; break;                    // PRISHTEE
        case "0324513": output = "Try to guess why she chose that nickname she goes by now. "; break;                   // JOHNY CHAN
        case "0324570": output = "King's great buddy. Word is Audi still doesn't know how you got to that size."; break;// SUBOWO
        case "0324776": output = "This guy has no idea where he is or what's happening. Just kidding."; break;          // LI JIE
        case "0324782": output = "The class did wonder where you disappeared off to."; break;                           // NUR AQILAH
        case "0324822": output = "I can't remember when we stopped calling you Big Teoh."; break;                       // NARICK TEOH
        case "0324856": output = "Care or no care? I'm confused."; break;                                               // ABIRUL ISLAM
        case "0324957": output = "The first time I saw your picture, your face was wider."; break;                      // RASHIK TASIN UDDIN
        case "0325030": output = "Louis Karlo Haimeh Araojo. Tony for short."; break;                                   // LUIS CARLOS (TONY)
        case "0325184": output = "He shouldn't sit still. Literally."; break;                                           // WILLY GHOZALI
        case "0325535": output = "I might be wrong, but you tend to act before thinking at times right?"; break;        // LING SU WYNN
        case "0325827": output = "Couldn't catch any fish in Australia."; break;                                        // GOH SIAU EU
        case "0325860": output = "How many senior batches has he mixed with already?"; break;                           // YONG KIN PONG
        case "0325999": output = "私はこの言語わからないよ！〜"; break;                                                     // CHAN CHIEW KING
        case "0326017": output = "mm"; break;                                                                           // TAN MAY SHUEN
        case "0326036": output = "Kak Naz daily."; break;                                                               // NAZLYN AMELIA 
        case "0326175": output = "Next time we go out together, forget Willy's phone."; break;                          // MONTE
        case "0326235": output = "While Li Jie's the more crude one, her act is usually the opposite."; break;          // KANG XIAOXI
        case "0326710": output = "Popped out of nowhere in sem 2, but she's a fun friend to be with!"; break;           // AFSANA ISLAM
        case "0326711": output = "I never had a class with him in uni. He and I go way back is all."; break;            // HP CHAMODE ANJANA
        case "0326800": output = "Thank you for telling me about DigitalOcean. How's Australia?"; break;                // CHONG JIA SHENG
        case "0327005": output = "Acute Holiday. Brave girl for taking ADS."; break;                                    // ABIGAIL ACHIAMMA JOSHUA
        case "0327087": output = "I read your blog. Don't let anyone or anything make you belittled in any way."; break;// LIM SHU EN
        case "0327159": output = "We met in Data Mining class. I'm sure both of us have regrets taking it."; break;     // OLIVER SIM CHOO HOWE
        case "0327250": output = "Acute Holiday"; break;                                                                // YAP LY DION
        case "0327821": output = "We know each other, but we don't talk a lot to each other."; break;                   // CHAW SHEN MIN
        case "0327893": output = "JY and I know but don't talk to each other a lot."; break;                            // LEE JIAN YI
        case "0328168": output = "Smart friend of mine, but his language capability has issues."; break;                // VICTOR TEH YANG JIE
        case "0329471": output = "Mustang-kun! Enthusiastic programmer, definitely worth your time."; break;            // ROY LING HANG YEW

        /* ----- TU STUDENTS ----- */
        case "0326861": output = "I could've sworn you're the huggable type."; break;                               // TAN JIN SOON
        case "0327114": output = "Never forget your friends that helped you in the tough spots."; break;            // HARRIS CHAN CHI HIAN
        case "0334135": output = "Half of you is opposite of your bro. Even handed-wise."; break;                   // ADELINE NG

        /* ----- SU CLASSMATES ----- */
        case "13025382": output = "You will always be the best one out of all of us."; break;                       // NICHOLAS CHAN KHIN WHAI
        case "13038567": output = "Your BF is the best out there. Cherish every moment with him nicely."; break;    // CLAUDIA NG
        case "19009109": output = "My only other companion in my Master's degree journey."; break;                  // CHAN CHIEW KING

        /* ----- MISCELLANEOUS ----- */
        case "brainz":
            output = "Brainz.";
            document.getElementById('sukhbir_' + (Math.floor(Math.random() * 2) + 4)).play();
            break;

        case "crazydave": case "crazy dave": case "crzydv": case "davidblazing": case "david blazing":
            output = "Wabby wabbo.";
            dave = Math.floor(Math.random() * 12);
            if (dave < 10) document.getElementById('dave_0' + dave).play();
            else document.getElementById('dave_' + dave).play();
            break;

        case "date":
            today = new Date();
            // output = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            output = monthFull[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
            break;

        case "datetime": case "date-time": case "date time":
            today = new Date();
            output
                = monthFull[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear()
                + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            break;

        case "easteregg": output = "Oh you."; break;
        case "eieio": output = "Now why the heck would '" + clue + "' be the passcode!?"; break;

        case "sukhbir":
            output = "Brainz?";
            document.getElementById('sukhbir_' + (Math.floor(Math.random() * 6))).play();
            break;

        case "time":
            today = new Date();
            output = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            break;

        case "top secret code lever": output = "I used to think putting all my games in a sub-sub-sub-subfolder was cool."; break;

        case "x": // press 'X' for Jason
            jason_count++;
            if (jason_count % 11 == 0) {
                document.getElementById('jason_11').play();
                output = "Ja-mai-son, Jason (cries)";
            } else if (jason_count % 11 < 10) {
                document.getElementById('jason_0' + (jason_count % 11)).play();
                if (jason_count % 11 <= 2) output = "JASON?"
                else if (jason_count % 11 == 3) output = "JASON!?";
                else if ((jason_count % 11 >= 4 && jason_count % 11 <= 6) || jason_count % 11 == 8) output = "JASON!!";
                else if (jason_count % 11 == 7 || jason_count % 11 == 9) output = "JASON";
            } else if (jason_count % 11 == 10) {
                document.getElementById('jason_' + (jason_count % 11)).play();
                output = "J-J-JASON";
            }
            break;

        /* ----- LINKS TO OTHER PAGES ----- */
        case "about": case "about me":
            window.location.replace("about/");
            break;

        case "blog": case "incoherent thoughts":
            window.open("blog/", "_blank");
            break;

        case "csi": case "community service":
            window.location.replace("community-service/");
            break;

        case "cv": case "curriculum vitae":
            window.open("pdf/HHW_cv2019.pdf", "_blank");
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

        default: // output = output;
    }
    document.getElementById("output").innerHTML = output;

    /* actions that change page layout or redirects to another page */
    if (input == "exit") {
        document.getElementById('menu').style.display = "";
        document.getElementById('hide-me-first').style.display = "none";
        document.getElementById("load").value = "";
        document.getElementById("output").innerHTML = "You have found the elusive, sub-par master mode!";
        jason_count = 0;
    } else if (input == "about") {
        window.location.replace("about/");
    } else if (input == "dark") {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            document.getElementById("dark-toggle").checked = false;
            document.getElementById("output").innerHTML = "Dark mode is turned off.";
        } else {
            document.body.classList.add("dark");
            document.getElementById("dark-toggle").checked = true;
            document.getElementById("output").innerHTML = "Dark mode is turned on.";
        }
    }
}

/* to activate sub-par master mode */
const clue = "eieio";
let clue_count = clue.length;
document.getElementById('clue').innerHTML = clue_count;

document.onkeypress = function (e) {
    e = e || window.event;
    let value = document.getElementById('clue').innerHTML;

    if (document.getElementById('menu').style.display != "none") {
        if (((e.keyCode == 101 || e.keyCode == 69) && (value == 5 || value == 3)) || ((e.keyCode == 105 || e.keyCode == 73) && (value == 4 || value == 2)) || (((e.keyCode == 111 || e.keyCode == 79) && value == 1))) {
            document.getElementById('clue').innerHTML = (value - 1);

            if (document.getElementById('clue').innerHTML == 0) {
                console.log("switch");
                document.getElementById('menu').style.display = "none";
                document.getElementById('hide-me-first').style.display = "";
                document.getElementById('clue').innerHTML = clue_count;
                jason_count = 0;
            }
        } else {
            document.getElementById('clue').innerHTML = clue_count;

            // press 'x' for Jason
            if (e.keyCode == 88 || e.keyCode == 120) document.getElementById('jason_00').play();
        }
    } else if (document.getElementById('hide-me-first').style.display != "none") {
        if (e.keyCode == 13) out();
    }
};
