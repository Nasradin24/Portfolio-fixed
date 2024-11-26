import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
