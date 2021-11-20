import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

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
    </div>
  );
};

export default Home;
