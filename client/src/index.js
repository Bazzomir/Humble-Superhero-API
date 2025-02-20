import React from 'react'; // Import React to use JSX syntax and React features
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering React components to the DOM
import App from './components/App'; // Import the root App component

// Get the root element from the HTML where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element using React.StrictMode for extra checks
root.render(
  <React.StrictMode>
    <App /> {/* The root component of the application */}
  </React.StrictMode>
);
