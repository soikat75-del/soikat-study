/* ==========================================
   SOIKAT BCS HUB
   Random Quote
========================================== */

function loadRandomQuote() {

    if (!quotes || quotes.length === 0) return;

    let previousIndex = Number(localStorage.getItem("lastQuoteIndex"));
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && randomIndex === previousIndex);

    localStorage.setItem("lastQuoteIndex", randomIndex);

    const quoteElement = document.getElementById("quote");

    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
}

loadRandomQuote();
