import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function AnimatedSticker({ base64Data, width = 200, height = 200 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let animation = null;
    
    if (containerRef.current) {
      try {
        // Декодируем base64 в JSON
        const animationData = JSON.parse(atob(base64Data));
        
        // Создаем анимацию
        animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData
        });
      } catch (error) {
        console.error('Ошибка при загрузке стикера:', error);
      }
    }

    // Очищаем анимацию при размонтировании компонента
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, [base64Data]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width, 
        height,
        display: 'inline-block'
      }} 
    />
  );
}

export default AnimatedSticker; 