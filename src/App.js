import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Order from './components/Order';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'order':
        return <Order />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <main className="App-content">
        {renderPage()}
      </main>
      
      <nav className="nav-bar">
        <button 
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <i className="material-icons nav-icon">home</i>
        </button>
        <button 
          className={`nav-button ${currentPage === 'order' ? 'active' : ''}`}
          onClick={() => setCurrentPage('order')}
        >
          <i className="material-icons nav-icon">shopping_cart</i>
        </button>
        <button 
          className={`nav-button ${currentPage === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentPage('settings')}
        >
          <i className="material-icons nav-icon">settings</i>
        </button>
      </nav>
    </div>
  );
}

export default App; 