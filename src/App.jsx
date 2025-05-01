import React, { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import ThemeToggle from './components/ThemeToggle';
import ProductCard from './components/ProductCard';
import products from './assets/products';
import { motion } from 'framer-motion';

export default function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen p-6 transition-all duration-500">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Multi-Theme Store
      </motion.h1>
      <ThemeToggle />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

