import React from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "../Utils/GlobalStyles";
import { lightTheme, darkTheme } from "../Utils/Theme";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/Actions/Theme";
import Home from "./Home";

const App = () => {
  const dispatch = useDispatch();

  const { darkmode } = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Global />
      <div>
        <h1>Reddit Clone</h1>
        <button onClick={() => dispatch(toggleTheme(!darkmode))}>Toggle</button>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
