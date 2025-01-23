import React, { useState, useEffect } from 'react';

const DarkModeButton: React.FC = () => {
  // darkMode'un ilk değerini localStorage'dan alıyoruz
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPreference = window.localStorage.getItem('darkMode');
      return storedPreference ? JSON.parse(storedPreference) : true;  // Varsayılan olarak dark mode'u true yapıyoruz
    }
    return true;
  });

  // darkMode değiştiğinde localStorage'a yazma işlemi
  useEffect(() => {
    // darkMode durumu değiştikçe, class ekle ve localStorage'ı güncelle
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Buton tıklaması ile darkMode durumunu değiştirme
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Component render edilirken yalnızca başlangıçta localStorage'a yazıyoruz
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, []); // Bu effect yalnızca component mount olduğunda çalışacak

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 p-2 bg-primary-light dark:bg-secondary-dark text-white rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;
