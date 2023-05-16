import { hot } from "react-hot-loader/root";
import "./test.scss";
import { useEffect, useState } from "react";

const App = () => {
  const preferredSystemMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(preferredSystemMode.matches);

  useEffect(() => {
    preferredSystemMode.onchange = e => {
      console.log(e.matches);
      if (e.matches) {
        setIsDark(!isDark);
      } else {
        setIsDark(!isDark);
      }
    };
  }, [isDark]);
  return (
    <div className={isDark ? "testDark" : "test"}>
      <h1>Welcome to React App thats build using Webpack </h1>
      <h2>browser hot reloaded</h2>
    </div>
  );
};

export default hot(App);
