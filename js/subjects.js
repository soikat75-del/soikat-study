const subjects = [
    {
        name: "Bangla",
        icon: "📘",
        chapters: 36,
        progress: 72,
        description: "Grammar • Literature • Language"
    },
    {
        name: "English",
        icon: "📗",
        chapters: 28,
        progress: 45,
        description: "Grammar • Vocabulary • Literature"
    },
    {
        name: "Bangladesh Affairs",
        icon: "🇧🇩",
        chapters: 22,
        progress: 15,
        description: "History • Constitution • Economy"
    },
    {
        name: "International Affairs",
        icon: "🌍",
        chapters: 18,
        progress: 0,
        description: "World Politics • Organizations"
    }
];

const grid = document.querySelector(".subjects-grid");

function createSubjectCard(subject) {

    return `
        <article class="subject-card">

            <div class="subject-icon">
                ${subject.icon}
            </div>

            <h2>${subject.name}</h2>

            <p>${subject.description}</p>

            <div class="progress-bar">
                <div class="progress-fill"
                     style="width:${subject.progress}%">
                </div>
            </div>

            <div class="subject-footer">

                <span>${subject.chapters} Chapters</span>

                <span>${subject.progress}% Complete</span>

            </div>

        </article>
    `;

}

grid.innerHTML = subjects.map(createSubjectCard).join("");
