import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Comment out or remove if not using

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render( // Use createRoot
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!'); // Add an error log for robustness
}

// If you're not using reportWebVitals, you can remove the import and this call
// reportWebVitals();