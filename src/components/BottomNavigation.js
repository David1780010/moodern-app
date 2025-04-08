import React from 'react';
import HomeIcon from './icons/HomeIcon';
import CartIcon from './icons/CartIcon';
import ProfileIcon from './icons/ProfileIcon';
import OrdersIcon from './icons/OrdersIcon';

function BottomNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'catalog', label: 'Каталог', icon: HomeIcon },
    { id: 'cart', label: 'Корзина', icon: CartIcon },
    { id: 'orders', label: 'Заказы', icon: OrdersIcon },
    { id: 'profile', label: 'Профиль', icon: ProfileIcon }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-4 ${
              activeTab === id ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Icon />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation; 