import React, { useState, useEffect } from "react";

let interval;

function Stopwatch() {
  const [lapsedTime, setLapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setLapsedTime(prevLapsedTime => prevLapsedTime + 0.1);
      }, 100);
    }

    return function cleanup() {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartStop = e => {
    e.preventDefault();

    setIsRunning(!isRunning);
  };

  const handleReset = e => {
    setLapsedTime(0);
    setIsRunning(false);
    clearInterval(interval);
  };

  const buttonClass = isRunning ? "button--stop" : "button--start";
  const buttonVerb = isRunning ? "Stop" : "Start";

  return (
    <div className="wrapper">
      <div className="container">
        <p className="time">{lapsedTime.toFixed(1)}s</p>
        <button className={`button ${buttonClass}`} onClick={handleStartStop}>
          {buttonVerb}
        </button>
        <button className="button button--reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
