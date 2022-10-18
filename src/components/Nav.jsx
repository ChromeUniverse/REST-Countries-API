import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

function Nav({ toggleClickHandler }) {
  const darkMode = useContext(ThemeContext);

  return (
    <nav className="flex flex-row items-center justify-between w-full h-20 px-8 md:px-24 bg-white dark:bg-dark-blue shadow-md">
      {/* Title */}
      <Link to="/">
        <h1 className="text-xl md:text-2xl font-bold text-very-dark-blue-text dark:text-white">
          Where in the World?
        </h1>
      </Link>

      {/* Dark Mode Toggle */}
      <div
        onClick={() => toggleClickHandler()}
        className="cursor-pointer flex flex-row gap-1.5 items-center"
      >
        {darkMode && (
          <FontAwesomeIcon
            icon={faSun}
            color={darkMode ? "white" : "hsl(200, 15%, 8%)"}
          />
        )}
        {!darkMode && (
          <FontAwesomeIcon
            icon={faMoon}
            color={darkMode ? "white" : "hsl(200, 15%, 8%)"}
          />
        )}

        <p className="text-very-dark-blue-text dark:text-white font-normal">
          {darkMode ? "Light" : "Dark"} Mode
        </p>
      </div>
    </nav>
  );
}

export default Nav;
