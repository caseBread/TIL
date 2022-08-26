import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  function destroyedFn() {
    console.log("bye :(");
  }
  function createdFn() {
    console.log("created :)");
    return destroyedFn;
  }
  useEffect(createdFn, []);
  return <h1>Hello</h1>;
}

function Apps() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Apps;
