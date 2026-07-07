const subjects = [
    {
        name: "Bangla",
        description: "Grammar, Literature & Language",
        chapters: 36,
        progress: 0,
        icon: "book"
    },
    {
        name: "English",
        description: "Grammar, Vocabulary & Literature",
        chapters: 28,
        progress: 0,
        icon: "globe"
    },
    {
        name: "Bangladesh Affairs",
        description: "History, Constitution & Economy",
        chapters: 22,
        progress: 0,
        icon: "flag"
    },
    {
        name: "International Affairs",
        description: "World Politics & Organizations",
        chapters: 18,
        progress: 0,
        icon: "earth"
    }
];

const grid = document.querySelector(".subjects-grid");

subjects.forEach(subject => {

    grid.innerHTML += `
        <article class="subject-card">

            <div class="subject-icon"></div>

            <h2>${subject.name}</h2>

            <p>${subject.description}</p>

            <div class="subject-meta">
                <span>${subject.chapters} Chapters</span>
                <span>${subject.progress}%</span>
            </div>

        </article>
    `;

});
