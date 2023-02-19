import axios from "axios";
import { IWeatherData } from "./IWeatherData";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "b16d3c460c63b50c63635b2ac02b0f46";

export const WeatherDataService = {
  async getWeatherData(latitude: number, longitude: number): Promise<IWeatherData> {
    const API_URL = `${API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const response = await axios.get<IWeatherData>(API_URL);
    return response.data;
  },
};


// "https://api.openweathermap.org/data/2.5/forecast?lat=57.7072&lon=11.9668&appid=b16d3c460c63b50c63635b2ac02b0f46&units=metric";
