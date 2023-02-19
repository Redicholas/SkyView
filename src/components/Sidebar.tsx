import SidebarItems from './SidebarItems'

export default function Sidebar() {
    return (
        <nav className="h-screen w-1/3 p-8 
        glass border-r">
            <h1 className="my-16 text-center text-2xl">SkyView</h1>
            <SidebarItems />
        </nav>
    )
}