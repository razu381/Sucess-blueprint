import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="font-heading text-success-primary-500 font-bold text-2xl">
        {" "}
        Hello world, This is Razu. i am starting the website called Sucess
        blueprint
      </h2>
    </div>
  );
}

export default App;
