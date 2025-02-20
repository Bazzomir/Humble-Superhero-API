import React from 'react'; // Import React
import '../assets/css/App.css'; // Import custom CSS for styling the app
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for responsive design and UI components
import Header from './component/Header'; // Import Header component
import Footer from './component/Footer'; // Import Footer component
import Main from './component/main'; // Import Main component (where the main functionality happens)

function App() {
  return (
    <div className="App"> {/* Main container for the entire app */}
      <Header /> {/* Include Header component at the top */}
      <Main /> {/* Include Main component where superheroes are displayed and created */}
      <Footer /> {/* Include Footer component at the bottom */}
    </div>
  );
}

export default App; // Export App component for use in other parts of the application
