import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Actions/Theme";
import Button1 from "./Buttons/Button1";
import Button2 from "./Buttons/Button2";
import Button3 from "./Buttons/Button3";
import Button4 from "./Buttons/Button4";
import Button6 from "./Buttons/Button6";
import Button5 from "./Buttons/Button5";

const Home = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { darkmode } = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <div>
      <h1
        style={{
          border: `1.5rem solid ${theme.text}`,
          width: "40rem",
          margin: "2rem",
        }}
      >
        This is the home page
      </h1>
      <div>
        <h1>Reddit Clone</h1>
        <span
          style={{
            width: "min-content",
          }}
          onClick={() => dispatch(toggleTheme(!darkmode))}
        >
          <Button1 title="Toggle">Toggle</Button1>
        </span>
      </div>
      <Button1 title="Button 1" />
      <Button2 title="Button 2" />
      <Button3 title="Button 3" />
      <Button4 title="Button 4" />
      <Button5 title="Go Back" />
      <Button6 title="Go Back" />
    </div>
  );
};

export default Home;
