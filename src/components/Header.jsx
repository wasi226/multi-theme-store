import React from "react";
import { useThemeStore } from "../store/themeStore";
import { themes } from "../themes";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <motion.header
      className={`w-full flex justify-between items-center px-6 py-4 shadow-md ${themes[theme].bg} ${themes[theme].text}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold tracking-wide">GoGetWell Store</div>

      <div className="flex gap-2 items-center">
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
              ${theme === key ? "scale-105 border-white" : "hover:scale-105 border-transparent"}
              ${themes[key].bg} ${themes[key].text}`}
          >
            {themes[key].label}
          </button>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
