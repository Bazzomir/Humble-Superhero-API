import React from 'react';
import '../assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
