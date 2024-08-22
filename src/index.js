import * as React from "react";
import * as ReactDOM from "react-dom/client"; // Correct import for React 18
import './App.css';

const quoteData = [
  { text: `“The purpose of our lives is to be happy.”`, author: "Dalai Lama" },
  { text: `“Life is what happens when you’re busy making other plans.”`, author: "John Lennon" },
  { text: `“Get busy living or get busy dying.”`, author: "Stephen King" },
  { text: `“You only live once, but if you do it right, once is enough.”`, author: "Mae West" },
  { text: `“Many of life’s failures are people who did not realize how close they were to success when they gave up.”`, author: "Thomas A. Edison" },
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>  
    <h2 id="author">{quote.author}</h2>
    <div className="actions"> {/* Use className instead of class */}
      <button 
        id="new-quote" 
        className="button"
        onClick={handleNewQuote} 
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

const getRandomIndex = () => Math.floor(Math.random() * quoteData.length); // Simplified random index function

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div className="main"> {/* Use className instead of class */}
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  );
};

// Ensure the ID matches the one in your HTML
document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("app"); // Use 'app' if that's the ID in your HTML

    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement); // Create root
        root.render(<App />); // Render the App component
    } else {
        console.error("Root element not found");
    }
});
