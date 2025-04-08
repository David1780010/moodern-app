import React from 'react';

function Orders() {
  const orders = [
    {
      id: 1,
      number: '1234',
      date: '2024-03-21',
      status: 'Доставлен',
      total: 3500,
      items: [
        { name: 'Футболка с принтом', quantity: 1, price: 1200 },
        { name: 'Джинсы классические', quantity: 1, price: 2300 }
      ]
    },
    {
      id: 2,
      number: '1233',
      date: '2024-03-19',
      status: 'В пути',
      total: 1200,
      items: [
        { name: 'Футболка с принтом', quantity: 1, price: 1200 }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Мои заказы</h1>
      
      {orders.map(order => (
        <div key={order.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-medium">Заказ #{order.number}</h3>
              <p className="text-sm text-gray-500">
                {new Date(order.date).toLocaleDateString('ru-RU')}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'Доставлен' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {order.status}
            </span>
          </div>
          
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>{item.price} ₽</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t flex justify-between items-center">
            <span className="font-medium">Итого:</span>
            <span className="font-bold">{order.total} ₽</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders; 