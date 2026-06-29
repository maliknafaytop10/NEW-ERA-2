/* ==========================================================
   GEN Z ERA - SYSTEM DATABASE EVALUATION DATA STORAGE NODES
   ========================================================== */

const categoriesRegistry = [
    { id: "tech-trends", name: "Gen Z Tech & Hacks", count: 5, icon: "fa-laptop-code" },
    { id: "slang-gaming", name: "Slangs & Gaming Zone", count: 5, icon: "fa-gamepad" },
    { id: "urdu-vibes", name: "Desi Culture & Memes", count: 5, icon: "fa-comments" }
];

const quizDatabase = {
    "tech-trends": [
        {
            id: "t1",
            question: "Cybersecurity mein PortSwigger platform kis cheez ki testing/labs ke liye sabsay zyada use hota hai?",
            options: ["Web Application Security & Burp Suite Labs", "Android App Cracking", "Windows Password Hacking", "Hardware IoT Exploits"],
            answer: "Web Application Security & Burp Suite Labs",
            isOpinion: false
        },
        {
            id: "t2",
            question: "Agar aapko apne Windows Taskbar ko completely invisible ya unique blur dena ho, to kaunsa open-source tool utilize hota hai?",
            options: ["TranslucentTB", "Rainmeter skin engine", "Rufus ISO Burner", "VLC Media Extractor"],
            answer: "TranslucentTB",
            isOpinion: false
        },
        {
            id: "t3",
            question: "Suno AI tool ne music generation industries mein kis tareeqay ka sabse bara revolution laya hai?",
            options: ["Sirf text prompt likhne se full vocal rap aur music tracks bana dena", "Gano ki speed slow+reverb karna", "Video editing automate karna", "YouTube channel automatically generate karna"],
            answer: "Sirf text prompt likhne se full vocal rap aur music tracks bana dena",
            isOpinion: false
        },
        {
            id: "t4",
            question: "OWASP Top 10 vulnerabilities list ka real-world security testing mein kya primary maqsad hota hai?",
            options: ["Web apps ke top 10 sabse critical security risks ko standardly identity karna", "Wi-Fi routers ke automatic passwords crack karna", "Operating System updates block karna", "Dark Web search speeds barhana"],
            answer: "Web apps ke top 10 sabse critical security risks ko standardly identity karna",
            isOpinion: false
        },
        {
            id: "t5",
            question: "Custom desktop widgets framework (jaise minimalist clock config ya layouts) ke liye sabsay legendary software kaunsa mana jata hai?",
            options: ["Rainmeter Engine", "CPU-Z Monitor", "WinRAR Extractors", "Notepad++ Text Layout"],
            answer: "Rainmeter Engine",
            isOpinion: false
        }
    ],
    "slang-gaming": [
        {
            id: "s1",
            question: "Gen Z conversations mein jab koi bolta hai 'Bro is cooking...', to is phrase ka direct context kya hota hai?",
            options: ["Bro kuch bohot kamaal ya exceptional cheez create/perform kar raha hai", "Bro sach mein kitchen mein khana bana raha hai", "Bro game haar raha hai", "Bro so raha hai"],
            answer: "Bro kuch bohot kamaal ya exceptional cheez create/perform kar raha hai",
            isOpinion: false
        },
        {
            id: "s2",
            question: "Hack The Box (HTB) platform par penetration testers kis activity ko primarily scale karne ke liye time spend karte hain?",
            options: ["Gamified Virtual Labs mein targeted machines hack karke flags capture karna", "Steam games free download karna", "Graphic designing templates sale karna", "Social media accounts auto-follow karna"],
            answer: "Gamified Virtual Labs mein targeted machines hack karke flags capture karna",
            isOpinion: false
        },
        {
            id: "s3",
            question: "Gen Z streaming community mein 'W' aur 'L' terms ka actual structural translation kya banta hai?",
            options: ["W = Win (Success) & L = Loss (Failure)", "W = Working & L = Lazy", "W = Wrong & L = Validated", "W = Waste & L = Legend"],
            answer: "W = Win (Success) & L = Loss (Failure)",
            isOpinion: false
        },
        {
            id: "s4",
            question: "Discord application par 'Server Boosting' karne se users ko primary advantages kya milte hain?",
            options: ["Audio quality enhancement, custom emojis slots, aur layout perks unlock hona", "Internet speed double ho jana", "PC ka graphics processing automatically upgrade hona", "YouTube advertisements skip ho jana"],
            answer: "Audio quality enhancement, custom emojis slots, aur layout perks unlock hona",
            isOpinion: false
        },
        {
            id: "s5",
            question: "Aapke mutabiq, modern competitive gaming runs mein clutch moments win karne ke liye sabse important metric kya hai?",
            options: ["Absolute Focus & Dynamic Mindset Control", "High-End RGB Lighting Layouts", "In-Game Premium Character Skins", "Music playlists running in background"],
            answer: "Absolute Focus & Dynamic Mindset Control",
            isOpinion: true
        }
    ],
    "urdu-vibes": [
        {
            id: "u1",
            question: "Social media par mashhoor meme phrase 'Yeh Tune Kya Kia' basic contextually kis moment par apply kiya jata hai?",
            options: ["Jab koi achanak unexpected blunder ya koi funny mistake kar bethe", "Jab koi bohot bara technical system build kare", "Exam top karne ki khushi mein", "Trading mein profit earn karte waqt"],
            answer: "Jab koi achanak unexpected blunder ya koi funny mistake kar bethe",
            isOpinion: false
        },
        {
            id: "u2",
            question: "Pakistani rap music ecosystem mein underground artist tracks par 'SEO-optimized description strings' kyun use kiye jaate hain?",
            options: ["YouTube algorithm search updates mein algorithms ranking expand karne ke liye", "Song ki file size compress karne ke liye", "Audio track ko re-master karne ke liye", "Lyrics auto-translate karne ke liye"],
            answer: "YouTube algorithm search updates mein algorithms ranking expand karne ke liye",
            isOpinion: false
        },
        {
            id: "u3",
            question: "Desi Internet culture mein '1 THEK THEK' expression sabsay zyada kis state layer ko organically simulate karta hai?",
            options: ["Absolute dynamic confirmation (Perfect agreement / Shabaash vibe)", "System loading errors", "Gusse ka izhaar karna", "Sone ki tayari karna"],
            answer: "Absolute dynamic confirmation (Perfect agreement / Shabaash vibe)",
            isOpinion: false
        },
        {
            id: "u4",
            question: "Agar koi student online classes ya technical fields seekhte waqt apne mentor ko 'Trading Sir' keh kar professionally communication maintain karta hai, to yeh kis approach ko darshata hai?",
            options: ["Professional Mentor-Guided Financial Skill Learning Layout", "Casual Online Gaming Lobby Chat", "Social Media Follower Campaign", "Random Group Interaction Mode"],
            answer: "Professional Mentor-Guided Financial Skill Learning Layout",
            isOpinion: false
        },
        {
            id: "u5",
            question: "Aapke khayal mein, modern rap projects ko global dynamic status dilane ke liye sabse solid dynamic core parameter kya hona chahiye?",
            options: ["Authentic Rap Lyrics & Real Hustle Energy", "High-End Paid Production Promotions", "Expensive Studio Microphone Visuals", "Artificial Fake Social Views Hype"],
            answer: "Authentic Rap Lyrics & Real Hustle Energy",
            isOpinion: true
        }
    ]
};
