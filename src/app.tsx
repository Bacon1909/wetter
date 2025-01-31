import { WeatherInputForm } from "./ui/WeatherInputForm";
import { Position, WeatherOutput } from "./types";
import { useState } from "react";

import { Card } from "./components/cards/Card";

import { Timer } from "./components/Timer";

export function App() {
  const [_position, setPosition] = useState<Position | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherOutput | null>(null);
  const [city, setCity] = useState<string>("");

  const handleCityInput = (
    position: Position,
    city: string,
    weatherData: WeatherOutput | null,
  ) => {
    setPosition(position);
    setCity(city);
    if (weatherData) setWeatherData(weatherData);
    console.log(position);
  };

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2 bg-teal-950">
        {/* <MouseTracker></MouseTracker> */}
        <WeatherInputForm onCityInput={handleCityInput} />
        {weatherData && <Card weatherData={weatherData} city={city} />}
        <Timer></Timer>
      </div>
    </>
  );
}
