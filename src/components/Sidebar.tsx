import { useState } from 'react'

export default function Sidebar() {
    return (
        <nav className="w-full p-8 
        glass">
            <h1 className="my-16 text-center text-2xl">SkyView</h1>
            <input id="searchInput" type="text" placeholder="Search" className="w-full p-2 rounded-lg" />
            <div id="location-dropdown" className="dropdown-content"></div>
        </nav>
    )
}