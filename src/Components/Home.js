import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Button1 from "./Buttons/Button1";
import Button2 from "./Buttons/Button2";
import Button3 from "./Buttons/Button3";
import Button4 from "./Buttons/Button4";
import Button6 from "./Buttons/Button6";
import Button5 from "./Buttons/Button5";

const Home = () => {
  const theme = useContext(ThemeContext);
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
