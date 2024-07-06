document.addEventListener("DOMContentLoaded", () => {
    const quoteBox = document.querySelector("quote");
    const quoteButton = document.querySelector("getQuote");

    async function fetchQuote() {
            document.body.insertAdjacentElement(h1, "loading.gif");
            const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random");
            const data = await response.json();
            document.body.h1 = null;
            if (error) {
                quoteBox.textContent = "Sorry we cant seem to find your quote!";
            } else {
                quoteBox.textContent = `"${data.en}" - ${data.author}`;
            }
    }

    quoteButton.addEventListener("click", fetchQuote);
    fetchQuote();
}
);