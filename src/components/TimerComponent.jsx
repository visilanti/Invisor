"use client";
import { useState, useEffect } from "react";

const TimerComponent = ({ trigger, callbackFn, zeroTime }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (trigger) {
      setSeconds(0);

      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds >= 120) {
            clearInterval(interval);
            setSeconds(0);
            return prevSeconds;
          }
          return prevSeconds + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [trigger]);

  useEffect(() => {
    if (seconds >= 120) {
      callbackFn();
    }
  }, [seconds]);

  useEffect(() => {
    if (!zeroTime) {
      setSeconds(0);
    }
  }, [zeroTime]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="flex gap-1 text-[#FA5F47] justify-center">
      <p className="font-bold text-xl">{formatTime(seconds)}</p>
      <p className="font-bold text-xl">/</p>
      <p className="font-bold text-xl">02:00</p>
    </div>
  );
};

export default TimerComponent;
