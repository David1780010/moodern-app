import React from 'react';
import dynamic from 'next/dynamic';
import { TGSSticker } from './TGSSticker';

function App() {
  return (
    <div>
      <TGSSticker 
        tgsUrl="/stickers/cat.tgs" 
        size={200} 
      />
    </div>
  );
}

// Динамический импорт (только на клиенте, так как TGS требует Web API)
const TgsPlayer = dynamic(
  () => import('react-tgs').then((mod) => mod.TgsPlayer),
  { ssr: false }
);

interface TGSStickerProps {
  tgsUrl: string;       // Путь к .tgs файлу
  size?: number;        // Размер (по умолчанию 256px)
  autoplay?: boolean;   // Автозапуск (true)
  loop?: boolean;       // Зацикливание (true)
  className?: string;   // Дополнительные классы CSS
}

export const TGSSticker: React.FC<TGSStickerProps> = ({
  tgsUrl,
  size = 256,
  autoplay = true,
  loop = true,
  className = '',
}) => {
  return (
    <div 
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        lineHeight: 0 // Убираем лишнее пространство
      }}
    >
      {TgsPlayer && (
        <TgsPlayer
          src={tgsUrl}
          autoplay={autoplay}
          loop={loop}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};