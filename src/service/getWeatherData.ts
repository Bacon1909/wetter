import { Position, Weather, WeatherOutput } from "../types";
import { WEATHER_API_URL } from "../constants";
import { useQuery } from "@tanstack/react-query";

export const useWeather = (position: Position | undefined) =>
  useQuery<WeatherOutput>({
    queryKey: ["weather", position?.lat, position?.lng],
    enabled: Boolean(position),
    queryFn: async () => {
      const response = await fetch(
        WEATHER_API_URL +
          `&latitude=${position!.lat}&longitude=${position!.lng}`,
      );
      const data: Weather = await response.json();
      return {
        humidity: data.current.relative_humidity_2m,
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
      };
    },
  });

// export async function getWeatherData(
//   position: Position,
// ): Promise<WeatherOutput | null> {
//   try {
//     const response = await fetch(
//       // "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code&timezone=Europe%2FBerlin&",
//       WEATHER_API_URL + `&latitude=${position.lat}&longitude=${position.lng}`,
//     );
//     if (!response.ok) throw Error("failed to fetch");
//     const data: Weather = await response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// useEffect(() => {
//   if (weatherData.length > 0) return;

//   async function fetchWeather() {
//     const response = await fetch(
//       WEATHER_API_URL + "latitude=52.52&longitude=13.41",
//     );
//     const data: Weather[] = await response.json();
//     setWeatherData(data);
//     console.log({ weatherData });
//   }
// }, []);

// return (
//   <ul>
//     {weatherData.map((weather, index) => (
//       <li key={index}>
//         <p>Temperatur: {weather.current_units.temperature_2m}°C</p>
//         <p>Beschreibung: {weather.hourly_units.weather_code}</p>
//         <p>Luftfeuchtigkeit: {weather.current_units.relative_humidity_2m}%</p>
//         <p>
//           Windgeschwindigkeit: {weather.current_units.wind_speed_10m} km/h
//         </p>
//       </li>
//     ))}
//   </ul>
// );
//}
