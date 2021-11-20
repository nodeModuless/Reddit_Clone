import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("dark");
  }, []);

  return [theme, toggleTheme];
};
export default useDarkMode;
