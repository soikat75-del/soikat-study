const notes = [
{
    title: "ধ্বনি",
    content: `
        <p>এখানে ধ্বনির সম্পূর্ণ নোট থাকবে।</p>
    `
},
{
    title: "বর্ণ",
    content: `
        <p>এখানে বর্ণের সম্পূর্ণ নোট থাকবে।</p>
    `
},
{
    title: "সন্ধি",
    content: `
        <p>এখানে সন্ধির সম্পূর্ণ নোট থাকবে।</p>
    `
},
{
    title: "সমাস",
    content: `
        <p>এখানে সমাসের সম্পূর্ণ নোট থাকবে।</p>
    `
}
];

const list = document.getElementById("notesList");

function renderNotes() {

    list.innerHTML = "";

    notes.forEach((note, index) => {

        list.innerHTML += `
        <div class="note-item">

            <button class="note-header">

                <span>${note.title}</span>

                <span class="arrow">+</span>

            </button>

            <div class="note-content">

                ${note.content}

            </div>

        </div>
        `;

    });

    initAccordion();

}

function initAccordion(){

    const headers = document.querySelectorAll(".note-header");

    headers.forEach(header=>{

        header.addEventListener("click",()=>{

            const item = header.parentElement;

            const opened = document.querySelector(".note-item.active");

            if(opened && opened!==item){

                opened.classList.remove("active");

            }

            item.classList.toggle("active");

        });

    });

}

renderNotes();
