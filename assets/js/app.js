// =========================
// Soikat BCS Hub - app.js
// =========================

// ---------- Bangladesh Date & Time ----------

function updateClock() {

    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka"
    });

    document.getElementById("todayDate").textContent = date;
    document.getElementById("liveTime").textContent = time;

}

updateClock();

setInterval(updateClock, 1000);

// ---------- Random Quote ----------

const quotes = [

"আজকের পরিশ্রমই আগামী দিনের সাফল্য।",

"শৃঙ্খলাই সফলতার সবচেয়ে বড় চাবিকাঠি।",

"ধীরে এগোলেও থেমে যেও না।",

"ছোট ছোট অগ্রগতিই একদিন বড় সাফল্যে পরিণত হয়।",

"Discipline beats motivation.",

"Small progress is still progress.",

"Success is built one day at a time.",

"Don't stop until you're proud.",

"The future depends on what you do today. — Mahatma Gandhi",

"Arise, awake, and stop not till the goal is reached. — Swami Vivekananda",

"নিজের প্রতিযোগী নিজেই হও।",

"প্রতিদিন ১% উন্নতি এক বছর পরে বিশাল পরিবর্তন আনে।"

];

document.getElementById("quote").textContent =
quotes[Math.floor(Math.random() * quotes.length)];


// ---------- Search (Coming Soon) ----------

const search = document.querySelector(".search input");

search.addEventListener("focus", () => {

    search.placeholder = "Search feature coming soon...";

});

search.addEventListener("blur", () => {

    search.placeholder = "Search subjects, notes...";

});
