import React, { useState } from 'react';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Orders from './components/Orders';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [activeTab, setActiveTab] = useState('catalog');

  const renderContent = () => {
    switch (activeTab) {
      case 'catalog':
        return <Catalog />;
      case 'cart':
        return <Cart />;
      case 'profile':
        return <Profile />;
      case 'orders':
        return <Orders />;
      default:
        return <Catalog />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Основной контент */}
      <main className="pb-16">
        {renderContent()}
      </main>

      {/* Нижняя навигация */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App; 