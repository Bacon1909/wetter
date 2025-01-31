export const WEATHER_API_URL =
  "https://api.open-meteo.com/v1/forecast?current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code&timezone=Europe%2FBerlin&" as const;

export const GEOCODER_API_URL =
  "https://geocoding-api.open-meteo.com/v1/search?count=1&language=desformat=json&name=";
