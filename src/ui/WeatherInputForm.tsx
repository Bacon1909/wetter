import { useEffect, useState } from "react";
import { Position, WeatherOutput } from "../types";

import { useWeather } from "../service/getWeatherData";

import { useGeoLocation } from "../service/getPositionByCityname";

export type WeatherInputFormProps = {
  onCityInput: (
    position: Position,
    city: string,
    weatherData: WeatherOutput | null,
  ) => void;
};

export function WeatherInputForm({ onCityInput }: WeatherInputFormProps) {
  const [city, setCity] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(city);

  const { data: geoData } = useGeoLocation(debouncedValue);
  const { data: weatherData } = useWeather(geoData);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(city);
    }, 350);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [city]);

  useEffect(() => {
    if (!geoData) return;
    if (!weatherData) return;
    // const currentWeather: WeatherOutput | null = await getWeatherData(data);

    onCityInput(geoData, city, weatherData);
  }, [weatherData]);
  return (
    <div className="flex flex-col gap-1 text-center">
      {/* {isLoading && (
        <div className="absolute left-7 top-7 animate-spin text-2xl text-white">
          🥓
        </div>
      )} */}
      <div className="flex gap-1">
        {/* {geoError && (
          <span className="font-mono text-xl text-red-300">
            {error.Message}
          </span>
        )} */}
        <input
          value={city}
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </div>
  );
}

//*************alte version ohne Debouncing********************
// async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//   e.preventDefault();
//   if (city === "") return;
//   try {
//     const position = await getPositionByCityname(city);
//     if (!position) {
//       setErrorMessage("Ort nicht gefunden");
//       return;
//     }
//     onCityInput(position, city);
//     setCity("");
//     setErrorMessage(null);
//   } catch (error) {
//     setErrorMessage("Ein Fehler ist beim Abrufen der Position aufgetreten");
//   }
// }

//   return (
//     <form className="flex gap-1" onSubmit={handleSubmit}>
//       {errorMessage && (
//         <span className="text xl font-mono text-red-300">{errorMessage}</span>
//       )}
//       <input
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         type="text"
//         className="rounded p-1"
//       />
//       <SubmitButton></SubmitButton>
//     </form>
//   );
// }
