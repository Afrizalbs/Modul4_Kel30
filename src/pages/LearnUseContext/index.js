import React, { useState, useContext } from "react";
import "./context.css";

const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#282c34",
  },
};

const ThemeContext = React.createContext(themes.light);

const LearnUseContext = () => {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const ThemedButton = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
      <button
        className="buttonContxt"
        style={{ background: theme.background, color: theme.foreground }}
        onClick={changeTheme}
      >
        Press to Change Theme
      </button>
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <p className="titleContxt">Theme by useContext</p>
        <p>Kelompok 30</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
};

export default LearnUseContext;
