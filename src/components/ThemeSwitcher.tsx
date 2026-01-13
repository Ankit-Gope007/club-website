'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleChange}
      className="p-2 text-2xl text-gray-800 dark:text-white transition-all duration-300 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeSwitcher;
