import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function AnimatedSticker() {
  const containerRef = useRef(null);

  useEffect(() => {
    let animation = null;
    
    if (containerRef.current) {
      // Загружаем стикер из Telegram
      fetch('https://raw.githubusercontent.com/telegram/tgstickers/main/stickers/Resistance/Resistance_01.tgs')
        .then(response => response.arrayBuffer())
        .then(buffer => {
          const uint8Array = new Uint8Array(buffer);
          return import('pako').then(pako => {
            const decompressed = pako.inflate(uint8Array, { to: 'string' });
            return JSON.parse(decompressed);
          });
        })
        .then(animationData => {
          animation = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData
          });
        })
        .catch(error => {
          console.error('Ошибка при загрузке стикера:', error);
        });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '200px', 
        height: '200px',
        margin: '0 auto'
      }} 
    />
  );
}

export default AnimatedSticker; 