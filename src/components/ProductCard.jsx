import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-green-600 dark:text-green-400">₹{product.price}</p>
      </div>
    </div>
  );
}

