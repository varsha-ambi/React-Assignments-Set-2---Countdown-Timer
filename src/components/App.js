import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState("");
  const handleKeyEnter = (event) => {
    if (event.keyCode === 13) {
      clearInterval(timerId);
      if (isNaN(event.target.value)) {
        setTime(0);
        return;
      }
      setTime(parseInt(event.target.value));
    }
    return;
  };
  const tick = () => {
    clearInterval(timerId);
    if (time <= 0) return;
    setTime(time - 1);
  };
  let timerId = setInterval(tick, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
