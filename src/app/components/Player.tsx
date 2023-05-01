import { Mic2, List, MonitorSpeaker, Volume2 } from 'lucide-react'

export function Player() {
    return (
        <div className="h-20 grid grid-cols-3 gap-20">
            {/* player */}
            <div className="col-start-2 col-span-4">
                <div className="flex flex-col items-center ">
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-shuffle text-lg text-zinc-300 hover:text-zinc-50" />
                        <i className="fa-solid fa-forward-step fa-flip-horizontal text-zinc-300 hover:text-zinc-50" />
                        <div className="bg-zinc-50 justify-items-center flex items-center justify-center w-10 h-10 hover:w-11 hover:h-11 rounded-full">
                            <i className="fa-solid fa-sharp fa-pause text-zinc-950 text-xl" />
                        </div>
                        <i className="fa-solid fa-forward-step text-zinc-300 hover:text-zinc-50" />
                        <i className="fa-solid fa-repeat text-lg text-zinc-300 hover:text-zinc-50" />
                    </div>

                    <div className="flex items-center justify-center">
                        {/* progress */}
                        <div className="pb-4 flex items-center gap-2 ">
                            <p className="text-xs text-zinc-500">00:00</p>
                            <div className="h-1 bg-zinc-500 w-96 rounded" />
                            <p className="text-xs text-zinc-500">00:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-end-7 p-6">
                <div className="flex items-center justify-end gap-4 px-4">
                    <Mic2 />
                    <List />
                    <MonitorSpeaker />
                    <Volume2 />
                    <div className="h-1 bg-zinc-50 w-20 rounded" />
                </div>
            </div>
        </div>
    )
}
