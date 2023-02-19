import { locationData } from "./locationData"

export default function SidebarItems() {
    return (
        <>
            {locationData.map((location) => {
                return (
                    <div className="border border-black p-2 rounded-lg flex items-center 
                    hover:bg-slate-800 my-4 transition-all
                    " key={location.location}>
                        <div className="w-10 h-10 rounded-full bg-amber-300 mr-2"></div>
                        <h2 className="text-lg mr-2">{location.location}</h2>
                        <p>{location.temp}°</p>
                    </div>
                )
            })}
        </>
    )
}