import React from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "../Utils/GlobalStyles";
import { lightTheme, darkTheme } from "../Utils/Theme";
import { useSelector } from "react-redux";
import Home from "./Home";

const App = () => {
  const { darkmode } = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Global />
      <Home />
    </ThemeProvider>
  );
};

export default App;
