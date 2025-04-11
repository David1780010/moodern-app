import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './components/Home';
import Order from './components/Order';
import Settings from './components/Settings';
import lottie from 'lottie-web';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const stickerContainer = useRef(null);

  useEffect(() => {
    if (!stickerContainer.current) return;

    const anim = lottie.loadAnimation({
      container: stickerContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/stickers/sticker.tgs'
    });

    return () => anim.destroy();
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'order': return <Order />;
      case 'settings': return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <main className="App-content">
        {renderPage()}
        <div 
          ref={stickerContainer}
          style={{
            width: '150px',
            height: '150px',
            margin: '20px auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        />
      </main>
      
      <nav className="nav-bar">
        <button 
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <i className="nav-icon">🏠</i>
        </button>
        <button 
          className={`nav-button ${currentPage === 'order' ? 'active' : ''}`}
          onClick={() => setCurrentPage('order')}
        >
          <i className="nav-icon">🛍️</i>
        </button>
        <button 
          className={`nav-button ${currentPage === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentPage('settings')}
        >
          <i className="nav-icon">⚙️</i>
        </button>
      </nav>
    </div>
  );
}

export default App;