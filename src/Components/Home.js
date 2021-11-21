import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Button1 from "./Buttons/Button1";
// import UnstyledButtonCustom from "./SvgButton";

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
      {/* <UnstyledButtonCustom title="Add Feedback" /> */}
    </div>
  );
};

export default Home;
