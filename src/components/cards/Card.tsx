import { WeatherOutput } from "../../types";

type CardProps = {
  weatherData: WeatherOutput | null;
  city: string;
};
export function Card({ city, weatherData }: CardProps) {
  return (
    <div className="rounded bg-teal-500 text-white">
      <span>{city}</span>
      <br />
      <span>Temperatur: {weatherData?.temperature}°C</span>
      <br />
      <span>Luftfeuchtigkeit: {weatherData?.humidity}%</span>
      <br />
      <span>Windgeschwindigkeit: {weatherData?.windSpeed} km/h</span>
    </div>
  );
}
