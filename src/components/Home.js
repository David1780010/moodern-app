import React from 'react';
import { WebApp } from '@twa-dev/sdk';

function Home() {
  const handleStartClick = () => {
    WebApp.showPopup({
      title: 'Добро пожаловать!',
      message: 'Спасибо, что выбрали наше приложение',
      buttons: [{ type: 'ok' }]
    });
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="tg-card">
          <h1 className="tg-title">Moodern App</h1>
          <p className="tg-text">
            Добро пожаловать в Moodern App - ваше мини-приложение Telegram!
          </p>
        </div>

        <div className="tg-card">
          <h2 className="tg-title">Возможности</h2>
          <p className="tg-text">
            • Быстрый доступ<br />
            • Удобный интерфейс<br />
            • Интеграция с Telegram<br />
            • Безопасность
          </p>
        </div>

        <button className="tg-button" onClick={handleStartClick}>
          Начать работу
        </button>

        <a href="https://t.me/your_support_bot" className="tg-link">
          Нужна помощь?
        </a>
      </div>
    </div>
  );
}

export default Home;
