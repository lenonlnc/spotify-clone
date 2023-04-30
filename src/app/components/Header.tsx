import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Header() {
    return (
        <div>
            <div className="pb-6">
                <div className="flex items-center gap-4">
                    <div className="p-1 rounded-full bg-zinc-900 w-10 h-10 flex items-center justify-center">
                        <ChevronLeft />
                    </div>
                    <div className="p-1 rounded-full bg-zinc-900 w-10 h-10 flex items-center justify-center">
                        <ChevronRight />
                    </div>
                </div>
            </div>

            <div className="pb-4 ">
                <h2 className="text-3xl text-zinc-50 font-bold">Good afternoon</h2>
            </div>
        </div>
    )
}
