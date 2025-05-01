import React from 'react';
import { useThemeStore } from '../store/themeStore';

const themes = ['default', 'dental', 'ortho'];

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className="flex justify-center gap-4">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-4 py-2 rounded-full border transition-all duration-300 font-semibold
            ${theme === t ? 'bg-black text-white scale-105' : 'bg-white text-black hover:bg-gray-100'}`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}

