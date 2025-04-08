import React, { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Футболка с принтом',
      price: 1200,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
      size: 'M'
    },
    {
      id: 2,
      name: 'Джинсы классические',
      price: 2300,
      quantity: 2,
      image: 'https://via.placeholder.com/100',
      size: '32'
    }
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Корзина пуста</h3>
            <p className="mt-1 text-sm text-gray-500">
              Добавьте товары из каталога
            </p>
          </div>
        ) : (
          items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Размер: {item.size}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-medium">{item.price * item.quantity} ₽</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {items.length > 0 && (
        <div className="border-t bg-white p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Итого:</span>
            <span className="text-xl font-semibold">{total} ₽</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart; 