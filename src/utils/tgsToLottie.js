import pako from 'pako';

export const tgsToLottie = async (tgsData) => {
  try {
    // Декодируем Base64 в бинарные данные
    const binaryData = atob(tgsData);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }

    // Распаковываем Gzip
    const decompressed = pako.inflate(bytes);

    // Конвертируем в строку и парсим JSON
    const decoder = new TextDecoder('utf-8');
    const jsonString = decoder.decode(decompressed);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error converting TGS to Lottie:', error);
    return null;
  }
}; 