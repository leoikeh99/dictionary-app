import React, { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const selectedFont = JSON.parse(localStorage.getItem("font"));
  const fontTypes = ["Sans Serif", "Serif", "Mono"];
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState(
    selectedFont ? selectedFont.name : fontTypes[0]
  );

  useEffect(() => {
    setPrefferedTheme();
    setPrefferedFont();
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  }

  function setPrefferedTheme() {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      setDarkMode(selectedTheme === "dark" ? true : false);
      return;
    }

    const prefersLightTheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    );
    if (prefersLightTheme.matches) {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      return;
    }

    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  const getFontVariable = (font) =>
    font === "Sans Serif"
      ? "var(--ff-sans-serif)"
      : font === "Serif"
      ? "var(--ff-serif)"
      : "var(--ff-mono)";

  function changeFont(newFont) {
    setFont(newFont);
    document.body.style.fontFamily = getFontVariable(newFont);
    localStorage.setItem(
      "font",
      JSON.stringify({ name: newFont, varName: getFontVariable(newFont) })
    );
  }

  function setPrefferedFont() {
    if (!selectedFont) {
      localStorage.setItem(
        "font",
        JSON.stringify({
          name: fontTypes[0],
          varName: getFontVariable(fontTypes[0]),
        })
      );
      return;
    }

    setFont(selectedFont.name);
    document.body.style.fontFamily = getFontVariable(selectedFont.name);
  }
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        font,
        fontTypes,
        toggleDarkMode,
        setPrefferedTheme,
        changeFont,
        getFontVariable,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
