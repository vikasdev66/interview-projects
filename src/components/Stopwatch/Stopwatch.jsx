import React, { useRef, useState } from "react";
import "./Stopwatch.css";

export function Stopwatch() {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const handleStart = () => {
    if (!start) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setStart(true);
      return;
    }
    clearInterval(intervalRef.current);
    setStart(false);
  };
  return (
    <div className="main-container">
      <div className="container">
        <header>Stopwatch</header>
        <div className="stopwatch-container flex flex-col items-center justify-center mt-10">
          <div>
            {Math.floor(timer / 60 / 60)} : {Math.floor((timer / 60) % 60)} :{" "}
            {Math.floor(timer % 60)}
          </div>
          <div className="stopwatch-btn-container">
            <button
              onClick={() => {
                handleStart(!start);
              }}
            >
              {start ? "Pause" : "Start"}
            </button>
            <button
              onClick={() => {
                clearInterval(intervalRef.current);
                setStart(false);
                setTimer(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
