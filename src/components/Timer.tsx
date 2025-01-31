import { useTimer } from "./useTimer";

export function Timer() {
  const [seconds] = useTimer();
  return (
    <>
      <div>{seconds}</div>
      <button onClick={() => useTimer()}>Play!</button>
    </>
  );
}
