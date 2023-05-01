'use client'

import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Player } from './components/Player'
import { PlaylistCard } from './components/PlaylistCard'
import { Header } from './components/Header'
import { Card } from './components/Card'

export default function Home() {
    const [isHovering, setHoveringState] = React.useState(false)
    const onMouseOver = () => setHoveringState(true)
    const onMouseOut = () => setHoveringState(false)

    return (
        // CONTAINER
        <div className="h-screen flex flex-col">
            {/* CONTENT CONTAINER */}
            <div className="flex flex-1">
                {/* SIDEBAR */}
                <Sidebar />
                {/* MAIN PAGE */}
                <main className="flex-1 flex-col flex overflow-hidden ">
                    <div className="bg-gradient-to-b px-6 py-4  from-teal-800 from-1% via-zinc-800 via-80% to-zinc-950 to-100%">
                        <Header />
                        <div className="grid grid-cols-3 gap-4">
                            {/* PLAYLISTS CARDS */}
                            <div className="flex flex-col gap-4">
                                <PlaylistCard name="This is the Offspring" />
                                <PlaylistCard name="brazil vibes" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <PlaylistCard name="Só as boas" />
                                <PlaylistCard name="Balling" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <PlaylistCard name="Brazilian Classics" />
                                <PlaylistCard name="Summer eletrohits 7" />
                            </div>
                        </div>
                    </div>

                    <div className="flex px-6 flex-col">
                        {/* your shows */}
                        <p className="text-xl font-bold">Your shows</p>

                        <div className="flex gap-4">
                            <Card name="Nerdcast" creator="Jovem nerd" />
                            <Card name="Nerdcast" creator="Jovem nerd" />
                            <Card name="Nerdcast" creator="Jovem nerd" />
                        </div>
                        {/* new episodes */}

                        <p className="text-xl font-bold">New episodes</p>

                        <div className="flex gap-4">
                            <Card name="Nerdcast" creator="Jovem nerd" />
                            <Card name="Nerdcast" creator="Jovem nerd" />
                            <Card name="Nerdcast" creator="Jovem nerd" />
                        </div>
                    </div>
                </main>
            </div>

            <div className="w-full h-0.5 bg-zinc-800 mb-4"></div>
            {/* PLAYER*/}
            <Player />
        </div>
    )
}
