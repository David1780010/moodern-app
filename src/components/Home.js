import React from 'react';
import AnimatedSticker from './AnimatedSticker';

// Тестовый стикер (это простая анимация круга)
const stickerData = "eyJuYW1lIjoiVGVzdCBBbmltYXRpb24iLCJ2IjoiNS43LjQiLCJmciI6NjAsImlwIjowLCJvcCI6NjAsInciOjIwMCwiaCI6MjAwLCJubSI6IlRlc3QgQW5pbWF0aW9uIiwiZGRkIjowLCJhc3NldHMiOltdLCJsYXllcnMiOlt7ImR5IjowLCJpbmQiOjEsInR5IjozLCJubSI6IlNoYXBlIExheWVyIDEiLCJzciI6MSwia3MiOnsibyI6eyJhIjowLCJrIjoxMDAsIml4IjoxMX0sInIiOnsiYSI6MSwiayI6W3siaSI6eyJ4IjowLCJ5IjowfSwibyI6eyJ4IjowLCJ5IjowfSwidiI6WzAsMzYwXSwidCI6MH1dLCJpeCI6MTF9LCJwIjp7ImEiOjAsImsiOlsxMDAsMTAwXSwiaXgiOjJ9LCJhIjp7ImEiOjAsImsiOlswLDM2MF0sIml4IjoxfSwicyI6eyJhIjowLCJrIjpbMTAwLDEwMF0sIml4IjozfX0sImFvIjowLCJzaGFwZXMiOlt7InR5IjoiZWwiLCJpdCI6W3siZCI6MSwidHkiOiJlbCIsInMiOnsiYSI6MCwiayI6WzEwMCwxMDBdLCJpeCI6Mn0sInAiOnsiYSI6MCwiayI6WzAsMF0sIml4IjozfX1dfV0sImlwIjowLCJvcCI6MTAwLCJzdCI6MCwiYm0iOjB9XX0=";

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
