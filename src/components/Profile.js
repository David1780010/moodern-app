import React from 'react';

function Profile() {
  return (
    <div className="p-4 space-y-6">
      {/* Профиль пользователя */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Иван Иванов</h2>
            <p className="text-gray-600">+7 (999) 123-45-67</p>
            <p className="text-gray-600">ivan@example.com</p>
          </div>
        </div>
      </div>

      {/* История заказов */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">История заказов</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Заказ #1234</p>
                <p className="text-sm text-gray-600">2 товара на сумму 3 500 ₽</p>
                <p className="text-sm text-green-600">Доставлен</p>
              </div>
              <p className="text-sm text-gray-600">21.03.2024</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Заказ #1233</p>
                <p className="text-sm text-gray-600">1 товар на сумму 1 200 ₽</p>
                <p className="text-sm text-blue-600">В пути</p>
              </div>
              <p className="text-sm text-gray-600">19.03.2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Настройки */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Настройки</h3>
        <div className="space-y-4">
          <button className="flex items-center justify-between w-full text-left">
            <span className="text-gray-700">Уведомления</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="flex items-center justify-between w-full text-left">
            <span className="text-gray-700">Адрес доставки</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="flex items-center justify-between w-full text-left">
            <span className="text-gray-700">Способ оплаты</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile; 