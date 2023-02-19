import { useState, useEffect } from 'react';
import { IWeatherData } from '../services/IWeatherData';
import { WeatherDataService } from '../services/WeatherDataService';

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    WeatherDataService.getWeatherData()
      .then(response => setWeatherData(response));      
    }, []);    
    
    if (!weatherData) {
      return <div>Loading...</div>;
    }
    
  return (
    <div className='mx-auto mt-20 glass h-fit p-12 border rounded-xl'>
      <h1 className="text-center text-2xl mb-8">Weather in Göteborg</h1>
      
      {weatherData?.list.slice(0, 6).map((weather) => {
        const time = new Date(weather.dt_txt).getHours().toString().padStart(2, '0').padEnd(5, ':00');
        const tempC = Math.floor(weather.main.temp);
        const weatherIcon = weather.weather[0].icon;    
        const description = weather.weather[0].description;    
        
        return (
          <div key={weather.dt_txt} className="flex justify-around items-center bg-slate-800 hover:bg-slate-900 mb-2 rounded-lg">
            <h2>{time}</h2>
            <p>{tempC}°</p>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt={`${description}`} title={`${description}`} />
          </div>
        );
      })
      }
    </div>
  );
}
