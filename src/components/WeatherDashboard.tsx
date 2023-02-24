import { useState, useEffect } from 'react';
import { IWeatherData } from '../services/models/IWeatherData';
import { WeatherDataService } from '../services/WeatherDataService';

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    WeatherDataService.getWeatherData(57.7, 11.96) // Gothenburg
      .then(response => setWeatherData(response));
    }, []);    
    
    if (!weatherData) {
      return <div>Loading...</div>;
    }
    
  return (
    <div className="
    flex mx-auto mt-20 glass h-fit p-4 gap-2 border rounded-xl overflow-x-scroll w-full sm:w-3/4"
    >      
      {weatherData?.list.map((weather) => {
        const time = new Date(weather.dt_txt).getHours().toString().padStart(2, '0');
        const tempC = Math.floor(weather.main.temp);
        const weatherIcon = weather.weather[0].icon;    
        const description = weather.weather[0].description;    
        
        return (
          <div key={weather.dt_txt} className="
          flex flex-col justify-around items-center bg-gray-400 p-4 gap-2 rounded-lg
          ">
            <h2>{time}</h2>
            <p>{tempC}°</p>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} 
              alt={`${description}`} title={`${description}`}
               />
          </div>
        );
      })
      }
    </div>
  );
}
