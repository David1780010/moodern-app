import React from 'react';
import AnimatedSticker from './AnimatedSticker';

function Home() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Moodern App</h1>
        <p>
          Добро пожаловать в Moodern App - ваше мини-приложение Telegram!
        </p>
        <AnimatedSticker />
      </div>
    </div>
  );
}

export default Home;
