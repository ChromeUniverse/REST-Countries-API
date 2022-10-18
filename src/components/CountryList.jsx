import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard'

function CountryList({ countries, hasLoaded }) {
  return (
    <div className="relative w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hasLoaded() &&
        countries.map((c, index) => (
          <Link key={index} to={`/country/${c.cca3.toLowerCase()}`}>
            <CountryCard              
              img={c.flags.svg}
              name={c.name.common}
              population={c.population}
              region={c.region}
              capital={c.capital}
            />
          </Link>
        ))}
      {hasLoaded() && countries.length === 0 && (
        <div className="absolute left-0 right-0 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-normal text-very-dark-blue-text dark:text-white">
            No results found!
          </h2>
          <p className="text-3xl font-light text-very-dark-blue-text dark:text-white">
            ¯\_(ツ)_/¯
          </p>
        </div>
      )}
      {!hasLoaded() &&
        Array.from(Array(60).keys()).map((i) => (
          <CountryCard key={i} loading />
        ))}
    </div>
  );
}

export default CountryList