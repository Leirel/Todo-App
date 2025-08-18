import { useState, useEffect, useRef } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // 현재 시간
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // 스톱워치 interval 관리
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const startStop = () => setIsRunning(prev => !prev);
    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setSeconds(0);
    };

    // 분:초 표시
    const formatTime = (sec) => {
        const m = Math.floor(sec / 60).toString().padStart(2, "0");
        const s = (sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="clock">
            <h2>⏰ 현재 시간</h2>
            <p>{time.toLocaleTimeString()}</p>

            <h2>⏱ 스톱워치</h2>
            <p>{formatTime(seconds)}</p>
            <button onClick={startStop}>{isRunning ? "정지" : "시작"}</button>
            <button onClick={reset}>리셋</button>
        </div>
    );
}

export default Clock;
