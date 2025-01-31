import { useQuery } from "@tanstack/react-query";
import { GEOCODER_API_URL } from "../constants";
import { GeocoderResponse, Position } from "../types";

export const useGeoLocation = (cityName: string) =>
  useQuery<Position>({
    queryKey: ["geolo", cityName],
    enabled: cityName !== "",
    queryFn: async () => {
      const response = await fetch(GEOCODER_API_URL + cityName);
      const data: GeocoderResponse = await response.json();
      const { latitude, longitude } = data.results[0];
      return { lat: latitude, lng: longitude };
    },
  });

// export async function getPositionByCityname(
//   cityName: string,
// ): Promise<Position | null> {
// fetch data from api
// try {
// const response = await fetch(GEOCODER_API_URL + cityName);
// if (!response.ok) throw Error("failed to fetch");
// const data: GeocoderResponse = await response.json();
// const { latitude, longitude } = data.results[0];
// console.log(`${latitude}  ${longitude}`);
//   // return { lat: latitude, lng: longitude };
// } catch (error) {
//   console.error(error);
//   //   return null;
//   }
// }
