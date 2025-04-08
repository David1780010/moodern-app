import React from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';

function App() {
  React.useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <div className="App">
      <h1>Telegram Mini App</h1>
    </div>
  );
}

export default App; 