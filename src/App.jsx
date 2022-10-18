import React, { createContext, useEffect, useState, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './views/Home';
import Detail from './views/Detail';

// Theme context provider
export const ThemeContext = createContext(null);

function App() {
  //  Data
  const initialDarkMode = JSON.parse(localStorage.getItem('darkMode')) === null ? true : JSON.parse(localStorage.getItem('darkMode'));  

  // State hooks
  const [darkMode, setDarkMode] = useState(initialDarkMode);  
  
  const toggleClickHandler = () => setDarkMode(prevMode => !prevMode);

  // Effect Hooks

  useEffect(() => {
    // Update DOM
    document.body.classList.remove('dark', 'light');
    const theme = darkMode ? 'dark' : 'light';
    document.body.classList.add(theme.toString());

    // Sync to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode])
  

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="bg-very-light-gray dark:bg-very-dark-blue-bg min-h-screen pb-12 flex flex-col">
        <Nav toggleClickHandler={toggleClickHandler} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:country_code' element={<Detail prop={'test'} />}/>
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App