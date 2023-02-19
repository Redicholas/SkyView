import Card from './components/Card'
import Sidebar from './components/Sidebar'
import WeatherDashboard from './components/WeatherDashboard'
import Sunnyday from './assets/sunny-day.png'
import Rainyday from './assets/rainy-day.png'

function App() {

  let isRainy = true

  return (
    <div className="App flex bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${isRainy ? Rainyday : Sunnyday})` }}>
      <Sidebar />
      <WeatherDashboard />
    </div>
  )
}

export default App
