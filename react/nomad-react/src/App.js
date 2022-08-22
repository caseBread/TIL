import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all time");
  useEffect(() => {
    console.log("i run only one");
  }, []);
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onClick}>plus one</button>
    </div>
  );
}

export default App;
