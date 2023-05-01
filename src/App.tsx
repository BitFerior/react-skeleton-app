import { hot } from "react-hot-loader/root";
import "./test.scss";

const App = () => {
  return (
    <div className="test">
      <h1>Welcome to React App thats build using Webpack </h1>
      <h2>browser hot reloaded</h2>
    </div>
  );
};

export default hot(App);
