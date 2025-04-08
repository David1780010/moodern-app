import React from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';

function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  
  React.useEffect(() => {
    WebApp.ready();
    
    // Слушаем изменения состояния полноэкранного режима
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Ошибка при переключении полноэкранного режима:', error);
    }
  };

  return (
    <div className="App">
      <h1>Telegram Mini App</h1>
      <button 
        className="fullscreen-button"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? 'Выйти из полноэкранного режима' : 'Открыть в полноэкранном режиме'}
      </button>
    </div>
  );
}

export default App; 