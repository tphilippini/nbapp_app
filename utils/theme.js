import React from "react";

const themes = {
  dark: {
    backgroundColor: "#2C2839",
    backgroundCard: "#302C3F",
    color: "#FFFFFF",
    status: "light",
  },
  light: {
    backgroundColor: "#E8EAED",
    backgroundCard: "#FFFFFF",
    color: "#302C3F",
    status: "dark",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false)

  const toggle = () => {
    setDark(!dark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }