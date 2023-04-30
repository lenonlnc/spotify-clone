import { userPlaylists } from './playlists'

export default function Home() {
    return (
        // CONTAINER
        <div className="h-screen flex flex-col">
            {/* CONTENT CONTAINER */}
            <div className="flex flex-1">
                {/* SIDEBAR */}
                <aside className="w-64 bg-zinc-950">
                    {/* OPTIONS */}
                    <div className="flex flex-col gap-8 py-12 px-2">
                        {/* OPTIOS */}
                        <div>
                            <ul className="flex flex-col gap-4">
                                {/* HOME */}
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="h-6 w-6 p-1 flex items-center text-lg">
                                        <i className="fa-solid fa-house text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in" />
                                    </div>
                                    <li className="text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in  font-medium">Home</li>
                                </div>

                                {/* SEARCH */}
                                <div className="flex items-center group gap-4 cursor-pointer">
                                    <div className="h-6 w-6 p-1 flex items-center text-lg">
                                        <i className="fa-solid fa-magnifying-glass text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in" />
                                    </div>
                                    <li className=" text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in  font-medium">Search</li>
                                </div>

                                {/* LIBRARY */}
                                <div className="flex items-center group gap-4 cursor-pointer">
                                    <div className="h-6 w-6 p-1 flex items-center text-lg">
                                        <i className="fa-solid fa-book text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in" />
                                    </div>
                                    <li className=" text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in  font-medium">Library</li>
                                </div>
                            </ul>
                        </div>

                        {/* PLAYLISTS OPTIONS*/}
                        <div>
                            <ul className="flex flex-col gap-4">
                                {/* CREATE PLAYLIST */}
                                <div className="flex items-center cursor-pointer group gap-4">
                                    <div className="h-6 w-6 bg-zinc-300 group-hover:bg-zinc-50 transition duration-150 ease-in p-1 flex items-center justify-center text-zinc-950 rounded">
                                        <i className="fa-solid fa-plus" />
                                    </div>
                                    <li className="text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in ">Create playlist</li>
                                </div>

                                {/* LIKED SONGS */}
                                <div className="flex items-center group cursor-pointer gap-4">
                                    <div className="h-6 w-6  bg-gradient-to-br from-indigo-900 from-10% via-indigo-500 via-40% to-indigo-100 to-90% px-1 rounded">
                                        <i className="fa-solid fa-heart group-hover:text-indigo-50 text-indigo-300 transition duration-150 ease-in" />
                                    </div>
                                    <li className="text-zinc-300 group-hover:text-zinc-50 transition duration-150 ease-in">Liked songs</li>
                                </div>

                                {/* YOUR EPISODES */}
                                <div className="flex items-center group cursor-pointer gap-4">
                                    <div className="h-6 w-6 flex justify-center items-center group-hover:bg-green-800 transition duration-150 ease-in bg-green-900 px-1 rounded">
                                        <i className="fa-solid fa-bookmark group-hover:text-green-500 transition duration-150 ease-in text-green-600" />
                                    </div>
                                    <li className="text-zinc group-hover:text-zinc-50 transition duration-150 ease-in">Your episodes</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-0.5 mr-6 ml-2 bg-zinc-900" />

                    {/* PLAYLISTS */}
                    <div className="overflow-y-auto h-96 ">
                        {userPlaylists.map((playlist) => {
                            return (
                                <div className="p-2 text-xs flex flex-col gap-4">
                                    <p className="text-xs text-zinc-300 hover:text-zinc-50 cursor-pointer">{playlist.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </aside>
                {/* MAIN PAGE */}
                {/*  */}
                <main className="flex-1 flex-col flex overflow-hidden ">
                    {/* SUPERIOR PART */}
                    <div className="bg-gradient-to-b px-6 py-4  from-teal-800 from-1% via-zinc-900 via-60% to-zinc-900 to-100%">
                        <div className="pb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-1 rounded-full bg-zinc-900 w-10 h-10 flex items-center justify-center">
                                    <i className="fa-solid fa-chevron-left" />
                                </div>
                                <div className="p-1 rounded-full bg-zinc-900 w-10 h-10 flex items-center justify-center">
                                    <i className="fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </div>

                        {/* recent playlists */}
                        <div className="pb-4 ">
                            <h2 className="text-3xl text-zinc-50 font-bold">Good afternoon</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 ">
                            <div className="flex flex-col gap-4">
                                <div className="flex item-center gap-4 bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded bg-zinc-950" />
                                    <p className="font-bold text-sm py-6">This is the Offspring</p>
                                </div>
                                <div className="flex item-center gap-4  bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded  bg-zinc-950" />

                                    <p className="font-bold text-sm py-6">Só as boas</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex item-center gap-4  bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded bg-zinc-950" />
                                    <p className="font-bold text-sm py-6">Balling</p>
                                </div>
                                <div className="flex item-center gap-4  bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded bg-zinc-950" />

                                    <p className="font-bold text-sm py-6">brazil vibes</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex item-center gap-4  bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded bg-zinc-950" />
                                    <p className="font-bold text-sm py-6">Brasilian Classics</p>
                                </div>
                                <div className="flex item-center gap-4  bg-teal-100 bg-opacity-10 w-full rounded">
                                    <div className="w-20 rounded bg-zinc-950" />

                                    <p className="font-bold text-sm py-6">Summer eletrohits 7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* your shows */}
                    <div></div>
                    {/* new episodes */}
                    <div></div>
                </main>
            </div>

            {/* PLAYER CONTAINER */}
            <footer className="h-20 flex items-center justify-center">
                <p>player</p>
            </footer>
        </div>
    )
}
