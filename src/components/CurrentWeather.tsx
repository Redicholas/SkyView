import { useState, useEffect } from 'react';
import { IWeatherData } from '../services/IWeatherData';
import { WeatherDataService } from '../services/WeatherDataService';

export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

    useEffect(() => {
        WeatherDataService.getWeatherData(57.7, 11.96)
        .then(response => setWeatherData(response));      
    }, []);    
  
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const weatherIcon = weatherData?.list[0].weather[0].icon;
    const tempC = Math.floor(weatherData?.list[0].main.temp);
    const description = weatherData?.list[0].weather[0].description.charAt(0).toUpperCase()
     + weatherData?.list[0].weather[0].description.slice(1);

    return (
        <div className="flex flex-col justify-center items-center sm:mt-20 w-fit mx-auto glass p-12 border rounded-xl">
            <h1 className="text-2xl">Göteborg</h1>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}></img>
            <p className="text-2xl">{tempC}°</p>
            <p className="text-2xl">{description}</p>
        </div>
    )
}