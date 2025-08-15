import React, { useState, useEffect } from 'react';

export default function Navigation(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDarkMode(theme === 'dark');
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const theme = document.documentElement.getAttribute('data-theme');
          setIsDarkMode(theme === 'dark');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleColorMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Store in localStorage to persist across sessions
    localStorage.setItem('theme', newTheme);
    
    // Dispatch custom event for Docusaurus theme system
    const event = new CustomEvent('themeChange', { detail: newTheme });
    window.dispatchEvent(event);
  };

  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="logo">Research & Consulting — Ted Chen</div>
        <button className="mobile-menu" onClick={toggleMenu}>☰</button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#research">精選案例</a></li>
          <li><a href="#articles">精選文章</a></li>
          <li><a href="#about">關於我</a></li>
          <li><a href="#service">服務預告</a></li>
          <li><a href="https://www.facebook.com/ted.aigc" target="_blank" rel="noopener noreferrer">粉專</a></li>
          <li>
            <button 
              onClick={toggleColorMode}
              className="color-mode-toggle"
              title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}