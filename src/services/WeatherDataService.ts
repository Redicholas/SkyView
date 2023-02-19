import axios from "axios";
import { IWeatherData } from "./IWeatherData";

const API_URL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=57.7072&lon=11.9668&appid=b16d3c460c63b50c63635b2ac02b0f46&units=metric";

export const WeatherDataService = {
  async getWeatherData(): Promise<IWeatherData> {
    const response = await axios.get<IWeatherData>(API_URL);
    return response.data;
  },
};
