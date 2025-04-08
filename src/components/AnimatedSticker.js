import React from 'react';
import Lottie from 'lottie-react';

const AnimatedSticker = ({ data, width = 150, height = 150 }) => {
  return (
    <div style={{ width, height }}>
      <Lottie
        animationData={data}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AnimatedSticker; 