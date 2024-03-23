"use client"
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create the Theme Context
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Theme Provider Component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Load theme preference from local storage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useMyTheme = () => useContext(ThemeContext);

