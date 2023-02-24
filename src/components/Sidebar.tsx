export default function Sidebar() {
    
    function getSearchInput(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const searchInputValue = (document.getElementById('searchInput') as HTMLInputElement)?.value;
        return searchInputValue;
    }

    return (
        <div className="p-8 w-fit mx-auto glass border border-slate-900 rounded-xl">
            <h1 className="my-4 text-center text-2xl">SkyView</h1>
            <form id="searchForm" onSubmit={getSearchInput} className="flex flex-col gap-8">
                <input id="searchInput" type="text" placeholder="Search" className="w-full p-2 rounded-lg" />
                <button type="submit" className="p-2 mx-auto rounded-lg bg-white">Search</button>
            </form>
        </div>
    )
}
