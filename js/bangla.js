const notes = [
    {
        title: "ধ্বনি",
        content: `
            <h3>ধ্বনি</h3>

            <p>এখানে ধ্বনির সম্পূর্ণ নোট থাকবে।</p>

            <!-- Image Example -->
            <!-- <img src="../assets/images/bangla/dhoni.webp" alt="ধ্বনি"> -->

            <!-- PDF Example -->
            <!--
            <a href="../assets/pdf/bangla/dhoni.pdf" target="_blank">
                Open PDF
            </a>
            -->
        `
    },

    {
        title: "বর্ণ",
        content: `
            <h3>বর্ণ</h3>

            <p>এখানে বর্ণের সম্পূর্ণ নোট থাকবে।</p>
        `
    },

    {
        title: "সন্ধি",
        content: `
            <h3>সন্ধি</h3>

            <p>এখানে সন্ধির সম্পূর্ণ নোট থাকবে।</p>
        `
    },

    {
        title: "সমাস",
        content: `
            <h3>সমাস</h3>

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
