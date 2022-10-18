import React, { useContext } from 'react'
import { ThemeContext } from '../App';

function CountryCard({ loading = false, img, name, population, region, capital }) {

  const darkMode = useContext(ThemeContext);
  
  return (
    <article className="rounded-lg bg-white dark:bg-dark-blue hover:brightness-[0.95] dark:hover:brightness-110 shadow-md cursor-pointer">
      {!loading && <img
        className="w-full rounded-t-lg h-48 md:h-44 object-cover"
        src={img}
        alt={`Image of ${name}'s flag`}
      />}

      {loading && <div className={`w-full rounded-t-lg h-48 loading ${darkMode ? 'loading-dark' : 'loading-light'} dark:brightness-110`}></div>}

      {!loading && <div className="px-6 text-very-dark-blue-text dark:text-white pb-10">
        <h2 className='text-xl font-bold pt-6 pb-4'>{name}</h2>
        <div>
          <p>
            <span className='pr-1 font-normal'>Population:</span>
            {Number(population).toLocaleString()}
          </p>
          <p>
            <span className='pr-1 font-normal'>Region:</span>
            {region}
          </p>
          <p>
            <span className='pr-1 font-normal'>Capital:</span>
            {capital}
          </p>
        </div>
      </div>}

      {loading && <div className="px-6 text-white pb-10 space-y-3">
        <h2 className={`w-[50%] rounded-md text-xl font-bold mt-6 loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</h2>
        <div className='space-y-1'>
          <p className={`w-[80%] rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</p>
          <p className={`w-[60%] rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</p>
          <p className={`w-[90%] rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</p>
        </div>
      </div>}

    </article>
  );
}

export default CountryCard