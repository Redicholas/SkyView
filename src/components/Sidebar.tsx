import { ChangeEvent, useState } from "react";
import { getWeatherData } from "../services/WeatherDataService";

export default function Sidebar() {
    // skapa state för väderdata, skicka väderdata till komponent med props

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    
    async function getSearchInput(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let response = await getWeatherData(city);
        setWeather(JSON.stringify(response));
        console.log(response);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <div className="p-8 w-fit mx-auto glass border border-slate-900 rounded-xl">
            <h1 className="my-4 text-center text-2xl">SkyView</h1>
            <form id="searchForm" onSubmit={getSearchInput} className="flex flex-col gap-8">
                <input id="searchInput" type="text" placeholder="Search" className="w-full p-2 rounded-lg" value={city} onChange={handleChange}/>
                <button type="submit" className="p-2 mx-auto rounded-lg bg-white">Search</button>
            </form>
            <p>{weather}</p>
        </div>
    )
}
