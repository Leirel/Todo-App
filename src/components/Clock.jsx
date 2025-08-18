// src/components/Clock.jsx
import { useState, useEffect, useRef } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // Stopwatch 상태
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // 현재 시간 (실시간 시계)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 스톱워치 시작/정지
  const startStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  // 스톱워치 리셋
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="clock">
      <h2>⏰ 현재 시간</h2>
      <p>{time.toLocaleTimeString()}</p>

      <h2>⏱ 스톱워치</h2>
      <p>{seconds} 초</p>
      <button onClick={startStop}>
        {isRunning ? "정지" : "시작"}
      </button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}

export default Clock;
