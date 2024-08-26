import * as React from 'react';
import PropTypes from 'prop-types'; // Ensure prop-types is imported
import './App.css';

const quoteData = [
  { text: '“The purpose of our lives is to be happy.”', author: 'Dalai Lama' },
  { text: '“Life is what happens when you’re busy making other plans.”', author: 'John Lennon' },
  { text: '“Get busy living or get busy dying.”', author: 'Stephen King' },
  { text: '“You only live once, but if you do it right, once is enough.”', author: 'Mae West' },
  { text: '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”', author: 'Thomas A. Edison' },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div className="actions">
      <button
        id="new-quote"
        className="button"
        onClick={handleNewQuote}
        type="button" // Ensure button type is specified
      >
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        rel="noreferrer"
        target="_blank"
      >
        Tweet
      </a>
    </div>
  </div>
);

QuoteBox.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleNewQuote: PropTypes.func.isRequired,
};

const getRandomIndex = () => Math.floor(Math.random() * quoteData.length);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div className="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  );
};

export default App;
