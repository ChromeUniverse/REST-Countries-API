import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../App";

function Footer() {
  const darkMode = useContext(ThemeContext);

  return (
    <footer className="mx-auto flex flex-col gap-3 pt-24 mt-auto">
      <p className="text-very-dark-blue-text dark:text-white text-center text-xl">
        Built by <span className="font-bold">Lucca Rodrigues</span> 🚀
      </p>
      <div className="flex flex-row justify-center gap-3">
        <a
          className="hover:scale-125 transition-all"
          href="https://github.com/ChromeUniverse"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color={`${darkMode ? "white" : "hsl(200, 15%, 8%)"}`}
            size="xl"
          />
        </a>
        <a
          className="hover:scale-125 transition-all"
          href="http://34.200.98.64/"
        >
          <FontAwesomeIcon
            icon={faGlobe}
            color={`${darkMode ? "white" : "hsl(200, 15%, 8%)"}`}
            size="xl"
          />
        </a>
        <a
          className="hover:scale-125 transition-all"
          href="https://www.youtube.com/c/LuccasLab"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            color={`${darkMode ? "white" : "hsl(200, 15%, 8%)"}`}
            size="xl"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
