import { useEffect, useState } from 'react'
import { IWeatherData } from './services/IWeatherData'
import { WeatherDataService } from './services/WeatherDataService'
import CurrentWeather from './components/CurrentWeather'
import Sidebar from './components/Sidebar'
import WeatherDashboard from './components/WeatherDashboard'
import Sunnyday from './assets/sunny-day.png'
import Rainyday from './assets/rainy-day.png'
import Cloudyday from './assets/cloudy-day.png'

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
      WeatherDataService.getWeatherData(57.7, 11.96)
      .then(response => setWeatherData(response));      
  }, []);    

  if (!weatherData) {
      return <div>Loading...</div>;
  }

  let backgroundImage;
  const weatherMain = weatherData?.list[0].weather[0].main;
  
  switch (weatherMain) {
    case 'Rain':
      backgroundImage = Rainyday;
      break;
    case 'Clear':
      backgroundImage = Sunnyday;
      break;
    case 'Clouds':
      backgroundImage = Cloudyday;
      break;
    default:
      backgroundImage = Sunnyday;
  }

  return (
    <div className="App min-h-screen flex flex-col bg-cover bg-center bg-fixed p-4" 
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <Sidebar /> */}
      <CurrentWeather />
      <WeatherDashboard />
    </div>
  )
}

export default App
