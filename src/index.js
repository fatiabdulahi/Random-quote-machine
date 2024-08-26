import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App'; // Import the App component
import './index.css'; // Import your CSS if needed

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app'); // Ensure this matches your HTML

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root
    root.render(<App />); // Render the App component
  } else {
    console.error('Root element not found');
  }
});
