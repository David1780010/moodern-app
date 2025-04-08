import React, { useState } from 'react';

function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'tshirts', name: 'Футболки' },
    { id: 'jeans', name: 'Джинсы' },
    { id: 'shoes', name: 'Обувь' }
  ];

  const products = [
    {
      id: 1,
      name: 'Футболка с принтом',
      price: 1200,
      category: 'tshirts',
      image: 'https://via.placeholder.com/300',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Джинсы классические',
      price: 2300,
      category: 'jeans',
      image: 'https://via.placeholder.com/300',
      sizes: ['30', '32', '34']
    },
    {
      id: 3,
      name: 'Кроссовки спортивные',
      price: 3500,
      category: 'shoes',
      image: 'https://via.placeholder.com/300',
      sizes: ['40', '41', '42', '43']
    },
    // Добавьте больше товаров по необходимости
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-white border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Размеры: {product.sizes.join(', ')}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold">{product.price} ₽</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog; 