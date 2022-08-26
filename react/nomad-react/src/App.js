import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Apps() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    console.log(`I run when 'keyword' changes.`);
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("SEARCH FOR", keyword);
    // }
  }, [keyword]);

  useEffect(() => {
    console.log(`I run when 'counter' changes.`);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>plus one</button>
    </div>
  );
}

export default Apps;
