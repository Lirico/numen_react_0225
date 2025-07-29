import { createContext, useState } from "react";

export const ThemeConext = createContext();

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(false);

  const updateTheme = () => setTheme(!theme)

  const themeToggle = theme && "dark"

  const themeIconToggle = theme ? "☀️" : "🌙"

  const value = {
    themeToggle,
    updateTheme,
    themeIconToggle
  };

  return <ThemeConext.Provider value={value}>
    {children}
  </ThemeConext.Provider>;
};

export default ThemeContextProvider;
