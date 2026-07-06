const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        card.style.transform = "scale(.96)";

        setTimeout(() => {
            card.style.transform = "";
        },150);

        alert(card.querySelector("h3").innerText);
    });
});

const search = document.querySelector("header input");

search.addEventListener("keyup", ()=>{

    const value = search.value.toLowerCase();

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value))
            card.style.display="block";
        else
            card.style.display="none";

    });

});
