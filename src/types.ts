export type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
    wind_speed_10m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    wind_speed_10m: number[];
  };
  daily_units: {
    time: string;
    weather_code: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
  };
};

export type Position = {
  lat: number;
  lng: number;
};

export type GeocoderResponse = {
  results: Array<{
    id: number;
    name: string;
    latitude: number;
    longitude: number;

    elevation: number | null;
    feature_code: string;
    country_code: string;
    admin1_id: number | null;
    admin2_id: number | null;
    admin3_id: number | null;
    admin4_id: number | null;
    timezone: string;
    population: number | null;
    postcodes: string;
    country_id: number;
    country: string;
    admin1: string;
    admin2: string | null;
    admin3: string | null;
    admin4: string | null;
  }>;
};

export type WeatherOutput = {
  temperature: number;
  humidity: number;
  windSpeed: number;
};
