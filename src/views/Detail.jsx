import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App';
import { Link, useLocation, useParams } from 'react-router-dom';

function Detail() {
  // Theme context
  const darkMode = useContext(ThemeContext);

  // State
  const [country, setCountry] = useState({});
  const [neighbors, setNeighbors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Get location from React Router
  const location = useLocation();
  const { country_code } = useParams();
  
  // Data fetching side effect
  useEffect(() => {
    async function fetchData() {      
      // fetch country data from API
      const res1 = await fetch(`https://restcountries.com/v3.1/alpha/${country_code}`);
      const countryData = await res1.json();
      const country = countryData[0];
          
      if (!country.borders) {
        setCountry(country);
        return setLoaded(true);
      }

      // fetch neighboring countries from API
      const res2 = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${country.borders.join(',')}`);
      const neighborsData = await res2.json();

      // Update "loaded" state
      window.scrollTo(0, 0);
      setCountry(country);
      setNeighbors(
        neighborsData.map((c) => ({ name: c.name.common, code: c.cca3.toLowerCase() }))
      );
      setLoaded(true);
    }
    fetchData();
  }, [location])


  return (
    <div className="px-8 md:px-24">
      {/* Back button */}
      <Link to="/">
        <div className="mt-12 mb-12 bg-white dark:bg-dark-blue w-28 md:w-40 h-12 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            color={`${darkMode ? "white" : "hsl(200, 15%, 8%)"}`}
          />
          <p className="text-very-dark-blue-text dark:text-white font-normal">
            Back
          </p>
        </div>
      </Link>

      {/* Content */}
      {loaded && (
        <main className="flex flex-col md:flex-row w-full items-center justify-between gap-16 md:gap-24">
          {/* Flag */}
          <img
            className="w-full md:max-w-[45%] rounded-xl"
            src={country.flags.svg}
            alt={`Image of ${country.name.common}'s flag`}
          />

          {/* Country info */}
          <section className="text-very-dark-blue-text dark:text-white flex flex-col w-full md:min-w-[45%] gap-8">
            <h2 className="text-3xl font-bold">{country.name.common}</h2>

            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-normal text-md">Native Name:</span>{" "}
                  {`${
                    Object.values(country.name.nativeName)[0].common
                  } (${Object.keys(country.name.nativeName)[0].toUpperCase()})`}
                </p>
                <p>
                  <span className="font-normal">Population:</span>{" "}
                  {Number(country.population).toLocaleString()}
                </p>
                <p>
                  <span className="font-normal">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-normal">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-normal">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-normal">Top Level Domain:</span>{" "}
                  {country.tld}
                </p>
                <p>
                  <span className="font-normal">Currencies:</span>{" "}
                  {Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-normal">Languages:</span>{" "}
                  {Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>

            {/* Border countries */}
            {country.borders && (
              <div className="flex flex-row flex-wrap items-center gap-4">
                <p className="w-full font-normal text-xl">Border Countries:</p>
                {neighbors.map((n) => (
                  <Link to={`/country/${n.code}`}>
                    <div className="min-w-[100px] bg-white dark:bg-dark-blue text-center rounded-md py-1 px-4 shadow-md cursor-pointer hover:brightness-110">
                      {n.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </main>
      )}
      {!loaded && (
        <main className="flex flex-col md:flex-row w-full items-center justify-between gap-16 md:gap-24">
          {/* Flag */}
          <div className={`w-full h-56 md:w-[55%] md:h-80 bg-white dark:bg-dark-blue rounded-xl loading brightness-95 ${darkMode ? 'loading-dark' : 'loading-light'} dark:brightness-110`}></div>

          {/* Country info */}
          <section className="text-very-dark-blue-text dark:text-white flex flex-col w-full md:w-[50%] gap-8">
            <h2 className={`text-3xl rounded-md font-bold loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[40%]`}>a</h2>

            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6">
              <div className="flex flex-col gap-2 md:w-[40%]">
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[90%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[40%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[70%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[65%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[90%]`}>a</p>
              </div>
              <div className="flex flex-col gap-2 md:w-[40%]">
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[40%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[90%]`}>a</p>
                <p className={`rounded-md loading ${darkMode ? 'loading-dark' : 'loading-light'} brightness-95 dark:brightness-110 w-[80%]`}>a</p>
              </div>
            </div>

            {/* Border countries */}            
            <div className="flex flex-row flex-wrap items-center gap-4">
              <div className='w-full'>
                <p className={`w-60 rounded-md brightness-95 dark:brightness-110 shadow-md font-normal text-xl loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</p>
              </div>              
              {Array.from(Array(6).keys()).map((i) => (
                <div className={`w-[100px] bg-white dark:bg-dark-blue text-center rounded-md py-1 px-4 shadow-md brightness-95 dark:brightness-110 loading ${darkMode ? 'loading-dark' : 'loading-light'}`}>a</div>
              ))}
            </div>
            
          </section>
        </main>
      )}
    </div>
  );
}

export default Detail