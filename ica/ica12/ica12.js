
const newQuoteButton = document.querySelector('#new-quote-button');

newQuoteButton.addEventListener('click', getQuote());

function getQuote() 
{
    console.log('I have been clicked!');

    const apiEnd = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    fetch(apiEnd)

    .then(quoteCheck => 
    {
      if (quoteCheck.error()) {
        throw new Error('Error');
      }
      
      return quoteCheck;
    })

    .then(quote => 
    {
        console.log(quote);

        displayQuote(quote.question);
    })

    .catch(error =>
    {
        console.error('Error: ', error);

        alert('Cant get your quote at the moment, sorry!');
    });
}




function displayQuote(quote) {
    const quoteText = document.querySelector('js-quote-text');
    quoteText.textContent = quote;
  }






