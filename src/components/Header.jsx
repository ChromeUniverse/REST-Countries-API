import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App';

function Header({ searchInput, setSearchInput, showMenu, setShowMenu, regions, regionFilter, menuItemClickHandler }) {

  const darkMode = useContext(ThemeContext);

  return (
    <header className="flex flex-col gap-6 md:flex-row w-full justify-between">
      {/* Search bar */}
      <div className="bg-white shadow-md dark:bg-dark-blue flex flex-row items-center w-full md:w-[40%] h-12 rounded-lg">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color={darkMode ? 'white' : 'hsl(200, 15%, 8%)'}
          className="px-6"
        />
        <input
          type="text"
          className="bg-transparent outline-none w-full pr-6 font-normal placeholder:font-light text-very-dark-blue-text placeholder:text-slate-700 caret-very-dark-blue-text dark:text-white dark:placeholder:text-slate-300 dark:caret-white"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* Dropdown menu container */}
      <div className="w-56 h-12 rounded-lg bg-white dark:bg-dark-blue relative flex items-center shadow-md">
        {/* Dropdown menu toggle */}
        <div className="px-6 flex flex-row items-center justify-between w-full">
          <p className="text-very-dark-blue-text dark:text-white font-normal">            
            {regionFilter === null ? 'Filter by Region' : regions[regionFilter]}
          </p>
          <FontAwesomeIcon
            icon={faAngleDown}
            color={darkMode ? 'white' : 'hsl(200, 15%, 8%)'}
            className={`
              cursor-pointer transition-all
              ${showMenu ? "rotate-180" : "rotate-0"}
            `}
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        {/* Dropdown menu */}
        {showMenu && (
          <div className="absolute top-14 bg-white dark:bg-dark-blue w-full rounded-lg flex flex-col gap-2 p-6 z-10 shadow-md">
            {regions.map((r, index) => (
              <p
                key={index}
                className="cursor-pointer text-very-dark-blue-text dark:text-white font-normal"
                onClick={() => menuItemClickHandler(index)}
              >
                {r}
              </p>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header