import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [position3, setPosition3] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition1({ x: event.clientX, y: event.clientY });

      const timeoutId2 = setTimeout(() => {
        setPosition2({ x: event.clientX, y: event.clientY });
      }, 700);

      const timeoutId3 = setTimeout(() => {
        setPosition3({ x: event.clientX, y: event.clientY });
      }, 1050);

      return () => {
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
      };
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="absolute"
        style={{
          left: position1.x,
          top: position1.y,
          fontSize: 100,
        }}
      >
        🐷
      </div>
      <div
        className="absolute animate-pulse"
        style={{
          left: position2.x,
          top: position2.y,
          fontSize: 100,
        }}
      >
        🔪
      </div>
      <div
        className="h-150 w-150 absolute bg-teal-950"
        style={{
          left: position3.x,
          top: position3.y,
          fontSize: 100,
        }}
      >
        🥓
      </div>
    </>
  );
}
