import React, { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import CountryList from "../components/CountryList";

function Home() {
  // State
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];  

  const hasLoaded = () => Object.keys(countries).length !== 0;
  // const hasLoaded = () => false;

  function menuItemClickHandler(index) {
    setShowMenu(false);
    setRegionFilter((prevRegionFilter) =>
      prevRegionFilter === index ? null : index
    );
  }

  // Memoized derived state
  const filteredCountries = useMemo(() => {
    return (
      countries
        // Region filter
        .filter((c) =>
          regionFilter !== null ? c.region === regions[regionFilter] : true
        )
        // Search filter
        .filter((c) => {
          return searchInput
            ? c.name.common.toLowerCase().includes(searchInput.toLowerCase())
            : true;
        })
    );
  }, [countries, searchInput, regionFilter]);

  useEffect(() => {
    async function fetchAllCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log(hasLoaded());
      setCountries(data);
    }
    fetchAllCountries();
  }, []);

  return (
    <main className="px-8 md:px-24 pt-10 flex flex-col w-full gap-10">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        regions={regions}
        regionFilter={regionFilter}
        menuItemClickHandler={menuItemClickHandler}
      />
      <CountryList countries={filteredCountries} hasLoaded={hasLoaded} />
    </main>
  );
}

export default Home;
