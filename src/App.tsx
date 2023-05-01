import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <div>
      <h1>Welcome to React App thats build using Webpack </h1>
      <h2>browser hot reloaded</h2>
    </div>
  );
};

export default hot(App);
