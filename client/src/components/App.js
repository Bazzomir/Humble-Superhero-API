import React from 'react';
import '../assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
