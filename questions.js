/* =======================================================
   GEN Z ERA - CORE QUESTION DATA MATRIX (ROMAN URDU)
   ======================================================= */

const quizDatabase = {
    "mcqs": [
        {
            id: 1,
            question: "Pakistan ka sab se bara shehar konsa hai population ke hisab se?",
            options: ["Lahore", "Karachi", "Islamabad", "Faisalabad"],
            answer: "Karachi"
        },
        {
            id: 2,
            question: "Islam ke mutabiq Pehle Nabi ka naam kya hai?",
            options: ["Hazrat Ibraheem A.S", "Hazrat Moosa A.S", "Hazrat Adam A.S", "Hazrat Esa A.S"],
            answer: "Hazrat Adam A.S"
        },
        {
            id: 3,
            question: "Computer ka brain kis component ko kaha jata hai?",
            options: ["RAM", "Hard Drive", "CPU", "GPU"],
            answer: "CPU"
        },
        {
            id: 4,
            question: "Duniya ki sab se unchi pahari choti (mountain peak) konsi hai?",
            options: ["K2", "Mount Everest", "Nanga Parbat", "Kangchenjunga"],
            answer: "Mount Everest"
        }
    ],
    "favorites": [
        {
            id: 101,
            question: "Agar ap ko life time free supply mile, to kis cheez ko choose karein ge?",
            options: ["Pizza", "Burger", "Biryani", "Ice Cream"],
            isOpinion: true
        },
        {
            id: 102,
            question: "Ap ka sab se pasandida timepass activity konsi hai?",
            options: ["Gaming", "Social Media Scrolling", "Movies/Web Series", "Sleeping"],
            isOpinion: true
        }
    ],
    "long-questions": [
        {
            id: 201,
            question: "Pakistan ke 10 bare shehron mein se konsa shehar Punjab mein shamil hai jo zoor-o-shoor se jana jata hai?",
            options: ["Karachi", "Lahore", "Peshawar", "Quetta", "Sialkot", "Multan", "Faisalabad", "Rawalpindi", "Gujranwala", "Hyderabad"],
            answer: "Lahore" // Multiple correct map fallback context inside engine
        }
    ],
    "puzzles": [
        {
            id: 301,
            question: "Aik kamre mein herat angez tor par aik bnda mara para hai. Table par aik khali glass aur paani ki botal pari hai, lekin farsh geela hai. Killer ne kya weapon use kiya?",
            options: ["Poison Ice Cube", "Gunshot", "Gas Leak", "Rope"],
            answer: "Poison Ice Cube"
        }
    ],
    "freedom": [
        {
            id: 401,
            question: "Kya ap aik aisi machine use krna chahein ge jo ap ki real life ko control kre?",
            options: ["Haan bilkul", "Kabhi bhi nahi", "Shayad agar safe ho", "Mujhe farq nahi parta"],
            isOpinion: true
        },
        {
            id: 402,
            question: "2000 se 2026 tak ka sab se bara tech revolution kya hai?",
            options: ["Smartphones", "Artificial Intelligence", "Crypto Currency", "High Speed Internet"],
            isOpinion: true
        }
    ],
    "emoji-quiz": [
        {
            id: 501,
            question: "Is Pakistani Song ko guess karein: 👁️ + 👄 + 👁️ (Eye Contact Expression)",
            options: ["Afreen Afreen", "Billo De Ghar", "Tajdar-e-Haram", "Passori"],
            answer: "Afreen Afreen"
        }
    ],
    "guess-movie": [
        {
            id: 601,
            question: "Identify the action movie with cars falling out of planes:",
            options: ["Fast and Furious 7", "Mission Impossible", "John Wick", "Die Hard"],
            answer: "Fast and Furious 7"
        }
    ],
    "guess-song": [
        {
            id: 701,
            question: "'Tu jhoom jhoom jhoom' kis mashoor platform ka track hai?",
            options: ["Coke Studio", "Nescafe Basement", "Suno AI", "Nafay Labs Originals"],
            answer: "Coke Studio"
        }
    ],
    "iq-challenge": [
        {
            id: 801,
            question: "Complete the pattern sequence framework logically: 2, 4, 8, 16, ?",
            options: ["20", "24", "32", "64"],
            answer: "32"
        }
    ],
    "impossible-choices": [
        {
            id: 901,
            question: "Would You Rather: Hamesha ke liye internet band ho jaye YA hamesha ke liye fast food band ho jaye?",
            options: ["No Internet", "No Fast Food"],
            isOpinion: true
        }
    ],
    "personality-quiz": [
        {
            id: 1001,
            question: "Mushkil situation mein ap ka dimaag sab se pehle kya sochta hai?",
            options: ["Fight back krna hai", "Bhaag nikalna hai", "Kisi dost se help leni hai", "Chill rhena hai"],
            isOpinion: true
        }
    ]
};

// Complete Metadata Registry Mapping for Frontend Rendering Loop
const categoriesRegistry = [
    { id: "mcqs", name: "MCQS Challenge", count: 4, icon: "fa-list-check" },
    { id: "favorites", name: "YOUR FAVORITES", count: 2, icon: "fa-heart" },
    { id: "long-questions", name: "LONG QUESTIONS", count: 1, icon: "fa-file-lines" },
    { id: "puzzles", name: "PUZZLES & MYSTERIES", count: 1, icon: "fa-puzzle-piece" },
    { id: "freedom", name: "FREEDOM ALL IN ONE", count: 2, icon: "fa-shuffle" },
    { id: "emoji-quiz", name: "Emoji Quiz Hub", count: 1, icon: "fa-face-smile-wink" },
    { id: "guess-movie", name: "Guess the Movie", count: 1, icon: "fa-film" },
    { id: "guess-song", name: "Guess the Song", count: 1, icon: "fa-music" },
    { id: "iq-challenge", name: "IQ Elite Challenge", count: 1, icon: "fa-brain" },
    { id: "impossible-choices", name: "Impossible Choices", count: 1, icon: "fa-triangle-exclamation" },
    { id: "personality-quiz", name: "Personality Evaluation", count: 1, icon: "fa-id-card" }
];
