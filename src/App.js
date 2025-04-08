import React, { useState, useEffect } from 'react';
import './App.css';
import AnimatedSticker from './components/AnimatedSticker';
import { tgsToLottie } from './utils/tgsToLottie';

function App() {
  const [stickerData, setStickerData] = useState(null);

  useEffect(() => {
    // Вставьте сюда ваш TGS файл в формате Base64
    const tgsString = "YOUR_TGS_BASE64_STRING";
    
    const loadSticker = async () => {
      const lottieData = await tgsToLottie(tgsString);
      setStickerData(lottieData);
    };

    loadSticker();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Moodern App
        </h1>
        
        {/* Добавляем стикер */}
        <div className="flex justify-center">
          {stickerData && (
            <AnimatedSticker 
              data={stickerData} 
              width={200} 
              height={200} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;