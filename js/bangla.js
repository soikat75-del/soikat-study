const notes = [

    "ধ্বনি",
    "বর্ণ",
    "সন্ধি",
    "সমাস",
    "কারক",
    "প্রত্যয়",
    "উপসর্গ",
    "বাক্য",
    "বানান",
    "এককথায় প্রকাশ",
    "বাগধারা",
    "সাহিত্য"

];

const container = document.querySelector(".notes-list");

function renderNotes(data){

    container.innerHTML = "";

    data.forEach(note=>{

        container.innerHTML += `
            <div class="note-card">
                ${note}
            </div>
        `;

    });

}

renderNotes(notes);

const search = document.getElementById("noteSearch");

search.addEventListener("input",()=>{

    const value = search.value.toLowerCase();

    renderNotes(

        notes.filter(note=>

            note.toLowerCase().includes(value)

        )

    );

});
