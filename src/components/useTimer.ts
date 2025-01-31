import { useEffect, useState } from "react";

export function useTimer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  function handlePlayPause() {
    setIsRunning(!isRunning);
  }

  return [seconds, handlePlayPause] as const;
}
