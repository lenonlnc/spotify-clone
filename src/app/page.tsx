'use client'

import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Player } from './components/Player'
import { PlaylistCard } from './components/PlaylistCard'
import { Header } from './components/Header'

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
                    {/* SUPERIOR PART */}
                    <div className="bg-gradient-to-b px-6 py-4  from-teal-800 from-1% via-zinc-900 via-60% to-zinc-900 to-100%">
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

                    {/* your shows */}
                    <div></div>
                    {/* new episodes */}
                    <div></div>
                </main>
            </div>

            {/* PLAYER CONTAINER */}
            <Player />
        </div>
    )
}
