import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);

  const prog = "We Love Programming!";

  const writeText = () => {
    let val = prog.slice(0, index);
    setText(val);

    let inx = index + 1;

    setIndex(inx);

    if (index > prog.length) {
      setIndex(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(writeText, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <h1>{text}</h1>
      <h2>Coded on Laptop!</h2>
    </div>
  );
}
